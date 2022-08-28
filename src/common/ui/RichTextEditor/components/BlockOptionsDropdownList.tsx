import styled from '@emotion/styled';
import { $createCodeNode } from '@lexical/code';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND
} from '@lexical/list';
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';
import { $wrapLeafNodesInElements } from '@lexical/selection';
import { $getSelection, $isRangeSelection, $createParagraphNode, LexicalEditor } from 'lexical';
import { MutableRefObject, useEffect, useRef } from 'react';
import { Code } from 'react-feather';

import { H1, H2, Ol, Ul, Quote, Paragraph } from '@common/assets/icons/Editor';

import type { BlockType } from '../plugins/ToolbarPlugin';

type BlockOptionsDropdownListPropTypes = {
  editor: LexicalEditor;
  blockType: BlockType;
  toolbarRef: MutableRefObject<HTMLDivElement | null>;
  onDropdownChange: (value: boolean) => void;
};

export function BlockOptionsDropdownList({
  editor,
  blockType,
  toolbarRef,
  onDropdownChange
}: BlockOptionsDropdownListPropTypes) {
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const toolbar = toolbarRef.current;
    const dropDown = dropDownRef.current;

    if (toolbar !== null && dropDown !== null) {
      const { top, left } = toolbar.getBoundingClientRect();

      dropDown.style.top = `${top + 40}px`;
      dropDown.style.left = `${left}px`;
    }
  }, [dropDownRef, toolbarRef]);

  useEffect(() => {
    const dropDown = dropDownRef.current;
    const toolbar = toolbarRef.current;

    if (dropDown !== null && toolbar !== null) {
      const handle = (event: MouseEvent) => {
        const target = event.target;

        if (!target) {
          return;
        }

        if (!dropDown.contains(target as Node) && !toolbar.contains(target as Node)) {
          onDropdownChange(false);
        }
      };

      document.addEventListener('click', handle);

      return () => {
        document.removeEventListener('click', handle);
      };
    }
  }, [dropDownRef, onDropdownChange, toolbarRef]);

  const formatParagraph = () => {
    if (blockType !== 'paragraph') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapLeafNodesInElements(selection, () => $createParagraphNode());
        }
      });
    }

    onDropdownChange(false);
  };

  const formatLargeHeading = () => {
    if (blockType !== 'h1') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapLeafNodesInElements(selection, () => $createHeadingNode('h1'));
        }
      });
    }

    onDropdownChange(false);
  };

  const formatSmallHeading = () => {
    if (blockType !== 'h2') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapLeafNodesInElements(selection, () => $createHeadingNode('h2'));
        }
      });
    }

    onDropdownChange(false);
  };

  const formatBulletList = () => {
    if (blockType !== 'ul') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }

    onDropdownChange(false);
  };

  const formatNumberedList = () => {
    if (blockType !== 'ol') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }

    onDropdownChange(false);
  };

  const formatQuote = () => {
    if (blockType !== 'quote') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapLeafNodesInElements(selection, () => $createQuoteNode());
        }
      });
    }

    onDropdownChange(false);
  };

  const formatCode = () => {
    if (blockType !== 'code') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapLeafNodesInElements(selection, () => $createCodeNode());
        }
      });
    }

    onDropdownChange(false);
  };

  return (
    <Dropdown ref={dropDownRef}>
      <Item onClick={formatParagraph}>
        <Icon>
          <Paragraph />
        </Icon>

        <Text>Normal</Text>
        {blockType === 'paragraph' && <Active />}
      </Item>
      <Item onClick={formatLargeHeading}>
        <Icon>
          <H1 />
        </Icon>
        <Text>Large Heading</Text>
        {blockType === 'h1' && <Active />}
      </Item>
      <Item onClick={formatSmallHeading}>
        <Icon>
          <H2 />
        </Icon>
        <Text>Small Heading</Text>
        {blockType === 'h2' && <Active />}
      </Item>
      <Item onClick={formatBulletList}>
        <Icon>
          <Ol />
        </Icon>
        <Text>Bullet List</Text>
        {blockType === 'ul' && <Active />}
      </Item>
      <Item onClick={formatNumberedList}>
        <Icon>
          <Ul />
        </Icon>
        <Text>Numbered List</Text>
        {blockType === 'ol' && <Active />}
      </Item>
      <Item onClick={formatQuote}>
        <Icon>
          <Quote />
        </Icon>
        <Text>Quote</Text>
        {blockType === 'quote' && <Active />}
      </Item>
      <Item onClick={formatCode}>
        <Icon>
          <Code />
        </Icon>
        <Text>Code Block</Text>
        {blockType === 'code' && <Active />}
      </Item>
    </Dropdown>
  );
}

const Dropdown = styled.div`
  z-index: 5;
  display: block;
  position: absolute;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  min-width: 100px;
  min-height: 40px;
  background-color: #fff;
`;

const Item = styled.button`
  margin: 0 8px 0 8px;
  padding: 8px;
  color: #050505;
  cursor: pointer;
  line-height: 16px;
  font-size: 15px;
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  border: 0;
  min-width: 268px;

  &:first-child {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 8px;
  }

  &:hover {
    background-color: #eee;
  }
`;

const Active = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  background-size: contain;
`;

const Text = styled.span`
  display: flex;
  line-height: 20px;
  flex-grow: 1;
  width: 200px;
`;

const Icon = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  user-select: none;
  margin-right: 12px;
  line-height: 16px;
  background-size: contain;
`;
