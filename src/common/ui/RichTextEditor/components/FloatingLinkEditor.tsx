import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $isAtNodeEnd } from '@lexical/selection';
import { mergeRegister } from '@lexical/utils';
import {
  SELECTION_CHANGE_COMMAND,
  $getSelection,
  $isRangeSelection,
  RangeSelection,
  NodeSelection,
  GridSelection,
  LexicalEditor,
  EditorState
} from 'lexical';
import { UpdateListener } from 'lexical/LexicalEditor';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Edit } from 'react-feather';

function positionEditorElement(editor: HTMLDivElement, rect: DOMRect | null) {
  if (rect === null) {
    editor.style.opacity = '0';
    editor.style.top = '-1000px';
    editor.style.left = '-1000px';
  } else {
    editor.style.opacity = '1';

    if (rect) {
      editor.style.top = `${rect.top + rect.height + window.pageYOffset + 10}px`;
      editor.style.left = `${
        rect.left + window.pageXOffset - editor.offsetWidth / 2 + rect.width / 2
      }px`;
    }
  }
}

function getSelectedNode(selection: RangeSelection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();

  if (anchorNode === focusNode) {
    return anchorNode;
  }

  const isBackward = selection.isBackward();

  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

export function FloatingLinkEditor({ editor }: { editor: LexicalEditor }) {
  const [linkUrl, setLinkUrl] = useState('');
  const [isEditMode, setEditMode] = useState(false);
  const [lastSelection, setLastSelection] = useState<
    RangeSelection | NodeSelection | GridSelection | null
  >(null);

  const editorRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const mouseDownRef = useRef(false);

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();

      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl('');
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection = window.getSelection();
    const activeElement = document.activeElement;

    if (editorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();

    if (
      selection !== null &&
      !nativeSelection?.isCollapsed &&
      rootElement !== null &&
      rootElement.contains(nativeSelection?.anchorNode as Node)
    ) {
      const domRange = nativeSelection?.getRangeAt(0);
      let rect = null;

      if (nativeSelection?.anchorNode === rootElement) {
        let inner = rootElement;

        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild as HTMLElement;
        }

        rect = inner.getBoundingClientRect();
      } else {
        if (domRange) {
          rect = domRange.getBoundingClientRect();
        }
      }

      if (!mouseDownRef.current) {
        positionEditorElement(editorElem, rect);
      }

      setLastSelection(selection);
    } else if (!activeElement || activeElement.className !== 'link-input') {
      positionEditorElement(editorElem, null);
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl('');
    }

    return true;
  }, [editor]);

  useEffect(() => {
    const LowPriority = 1;

    return mergeRegister(
      editor.registerUpdateListener(({ editorState }: { editorState: EditorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor();
          return true;
        },
        LowPriority
      )
    );
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (lastSelection !== null) {
        if (linkUrl !== '') {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
        }

        setEditMode(false);
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setEditMode(false);
    }
  };

  return (
    <LinkEditor ref={editorRef}>
      {isEditMode ? (
        <LinkInput
          ref={inputRef}
          value={linkUrl}
          onChange={(event) => setLinkUrl(event.target.value)}
          onKeyDown={handleKeydown}
        />
      ) : (
        <>
          <LinkInputBox>
            <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
              {linkUrl}
            </Link>
            <LinkEdit
              role="button"
              tabIndex={0}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => setEditMode(true)}
            >
              <Edit />
            </LinkEdit>
          </LinkInputBox>
        </>
      )}
    </LinkEditor>
  );
}

const LinkEditor = styled.div`
  position: absolute;
  z-index: 100;
  top: -10000px;
  left: -10000px;
  margin-top: -6px;
  max-width: 300px;
  width: 100%;
  opacity: 0;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: opacity 0.5s;
`;

const linkInputStyle = css`
  display: block;
  width: calc(100% - 24px);
  box-sizing: border-box;
  margin: 8px 12px;
  padding: 8px 12px;
  border-radius: 15px;
  background-color: #eee;
  font-size: 15px;
  color: rgb(5, 5, 5);
  border: 0;
  outline: 0;
  position: relative;
  font-family: inherit;
`;

const LinkInput = styled.input`
  ${linkInputStyle}
`;

const LinkInputBox = styled.div`
  ${linkInputStyle}
`;

const Link = styled.a`
  color: rgb(33, 111, 219);
  text-decoration: none;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 30px;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkEdit = styled.div`
  background-image: url(images/icons/pencil-fill.svg);
  background-size: 16px;
  background-position: center;
  background-repeat: no-repeat;
  width: 35px;
  vertical-align: -0.25em;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
`;
