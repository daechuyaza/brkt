import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  $createCodeNode,
  $isCodeNode,
  getDefaultCodeLanguage,
  getCodeLanguages
} from '@lexical/code';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $isListNode, ListNode } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isHeadingNode } from '@lexical/rich-text';
import { $isParentElementRTL, $isAtNodeEnd } from '@lexical/selection';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $getNodeByKey,
  RangeSelection
} from 'lexical';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Bold,
  Italic,
  Underline,
  Code,
  Link2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Minus,
  RotateCcw,
  RotateCw,
  ChevronDown,
  Type
} from 'react-feather';

import { H1, H2, Ol, Quote, Ul } from '@common/assets/icons/Editor';

import { BlockOptionsDropdownList, Divider, FloatingLinkEditor, Select } from '../components';

const LowPriority = 1;

const supportedBlockTypes = new Set(['paragraph', 'quote', 'code', 'h1', 'h2', 'ul', 'ol']);

const blockTypeToBlockName = {
  code: 'Code Block',
  h1: 'Large Heading',
  h2: 'Small Heading',
  h3: 'Heading',
  h4: 'Heading',
  h5: 'Heading',
  ol: 'Numbered List',
  paragraph: 'Normal',
  quote: 'Quote',
  ul: 'Bulleted List'
} as const;

export type BlockType = keyof typeof blockTypeToBlockName;

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

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [blockType, setBlockType] = useState<BlockType>('paragraph');
  const [selectedElementKey, setSelectedElementKey] = useState<string | null>(null);
  const [showBlockOptionsDropDown, setShowBlockOptionsDropDown] = useState(false);
  const [codeLanguage, setCodeLanguage] = useState('');
  const [isRTL, setIsRTL] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isCode, setIsCode] = useState(false);

  const toolbarRef = useRef<HTMLDivElement | null>(null);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === 'root' ? anchorNode : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);

      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);

        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();

          setBlockType(type);
        } else {
          const type = $isHeadingNode(element) ? element.getTag() : element.getType();

          setBlockType(type as BlockType);

          if ($isCodeNode(element)) {
            setCodeLanguage(element.getLanguage() || getDefaultCodeLanguage());
          }
        }
      }

      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsCode(selection.hasFormat('code'));
      setIsRTL($isParentElementRTL(selection));

      const node = getSelectedNode(selection);
      const parent = node.getParent();

      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload) => {
          updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority
      )
    );
  }, [editor, updateToolbar]);

  const codeLanguges = useMemo(() => getCodeLanguages(), []);

  const onCodeLanguageSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      editor.update(() => {
        if (selectedElementKey !== null) {
          const node = $getNodeByKey(selectedElementKey);
          if ($isCodeNode(node)) {
            node.setLanguage(e.target.value);
          }
        }
      });
    },
    [editor, selectedElementKey]
  );

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  let blockTypeIcon;

  switch (blockType) {
    case 'paragraph': {
      blockTypeIcon = <Type size={18} />;
      break;
    }
    case 'code': {
      blockTypeIcon = <Code size={18} />;
      break;
    }
    case 'h1': {
      blockTypeIcon = <H1 width={18} height={18} />;
      break;
    }
    case 'h2': {
      blockTypeIcon = <H2 width={18} height={18} />;
    }
    case 'quote': {
      blockTypeIcon = <Quote width={18} height={18} />;
      break;
    }
    case 'ul': {
      blockTypeIcon = <Ul width={18} height={18} />;
      break;
    }
    case 'ol': {
      blockTypeIcon = <Ol width={18} height={18} />;
    }
  }

  const handleBlockOptionDropdownClick = (value: boolean) => {
    setShowBlockOptionsDropDown(value);
  };

  return (
    <EditorToolbar ref={toolbarRef}>
      <SpacedToolbarItem
        disabled={!canUndo}
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
        aria-label="Undo"
      >
        <RotateCcw />
      </SpacedToolbarItem>
      <ToolbarItem
        disabled={!canRedo}
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
        aria-label="Redo"
      >
        <RotateCw />
      </ToolbarItem>
      <Divider />

      {supportedBlockTypes.has(blockType) && (
        <>
          <ToolbarItem
            onClick={() => setShowBlockOptionsDropDown(!showBlockOptionsDropDown)}
            aria-label="Formatting Options"
          >
            <BlockTypeIcon>{blockTypeIcon}</BlockTypeIcon>
            <BlockTypeText>{blockTypeToBlockName[blockType]}</BlockTypeText>
            <ChevronDown size={18} />
          </ToolbarItem>
          {showBlockOptionsDropDown &&
            createPortal(
              <BlockOptionsDropdownList
                editor={editor}
                blockType={blockType}
                toolbarRef={toolbarRef}
                onDropdownChange={handleBlockOptionDropdownClick}
              />,
              document.body
            )}
          <Divider />
        </>
      )}

      {blockType === 'code' ? (
        <>
          <Select onChange={onCodeLanguageSelect} options={codeLanguges} value={codeLanguage} />
          <ChevronDown />
        </>
      ) : (
        <>
          <SpacedToolbarItem
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
            isActive={isBold}
            aria-label="Format Bold"
          >
            <Bold />
          </SpacedToolbarItem>
          <SpacedToolbarItem
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
            isActive={isItalic}
            aria-label="Format Italics"
          >
            <Italic />
          </SpacedToolbarItem>
          <SpacedToolbarItem
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
            isActive={isUnderline}
            aria-label="Format Underline"
          >
            <Underline />
          </SpacedToolbarItem>
          <SpacedToolbarItem
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')}
            isActive={isStrikethrough}
            aria-label="Format Strikethrough"
          >
            <Minus />
          </SpacedToolbarItem>
          <SpacedToolbarItem
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')}
            isActive={isCode}
            aria-label="Insert Code"
          >
            <Code />
          </SpacedToolbarItem>
          <SpacedToolbarItem onClick={insertLink} isActive={isLink} aria-label="Insert Link">
            <Link2 />
          </SpacedToolbarItem>
          {isLink && createPortal(<FloatingLinkEditor editor={editor} />, document.body)}
          <Divider />
          <SpacedToolbarItem
            onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')}
            aria-label="Left Align"
          >
            <AlignLeft />
          </SpacedToolbarItem>
          <SpacedToolbarItem
            onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')}
            aria-label="Center Align"
          >
            <AlignCenter />
          </SpacedToolbarItem>
          <SpacedToolbarItem
            onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')}
            aria-label="Right Align"
          >
            <AlignRight />
          </SpacedToolbarItem>
          <ToolbarItem
            onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify')}
            aria-label="Justify Align"
          >
            <AlignJustify />
          </ToolbarItem>
        </>
      )}
    </EditorToolbar>
  );
}

const EditorToolbar = styled.div`
  display: flex;
  margin-bottom: 1px;
  background: #fff;
  padding: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  vertical-align: middle;
`;

const activeStyle = css`
  background-color: rgba(223, 232, 250, 0.3);

  i {
    opacity: 1;
  }
`;

const ToolbarItem = styled.button`
  align-items: center;
  border: 0;
  display: flex;
  background: none;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  vertical-align: middle;

  &:disabled {
    cursor: not-allowed;

    i.format {
      opacity: 0.2;
    }
  }

  i.format {
    background-size: contain;
    display: inline-block;
    height: 18px;
    width: 18px;
    margin-top: 2px;
    vertical-align: -0.25em;
    display: flex;
    opacity: 0.6;
  }

  &:hover:not([disabled]) {
    background-color: #eee;
  }
`;

const SpacedToolbarItem = styled(ToolbarItem)<{
  isActive?: boolean;
}>`
  margin-right: 2px;

  ${({ isActive }) => isActive && activeStyle};
`;

const BlockTypeIcon = styled.span`
  background-size: contain;
  display: inline-block;
  vertical-align: -0.25em;
  display: flex;
  opacity: 0.6;
  margin-right: 4px;
`;

const BlockTypeText = styled.span`
  display: flex;
  line-height: 20px;
  width: 200px;
  vertical-align: middle;
  font-size: 14px;
  color: #777;
  text-overflow: ellipsis;
  width: 70px;
  overflow: hidden;
  height: 20px;
  text-align: left;
`;
