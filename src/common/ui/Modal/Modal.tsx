import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { popInFromBottom, popOutToBottom } from '../../../styles/keyframes';

type Props = {
  active: boolean;
  children: React.ReactNode;
  onClickBackdrop?: () => void;
};

export function Modal({ active = false, children, onClickBackdrop }: Props) {
  const [mounted, setMounted] = useState(false);

  const ref = useRef<Element | null>(null);

  useEffect(() => {
    setMounted(true);

    if (document) {
      const dom = document.getElementById('root-modal');

      ref.current = dom;
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (active) {
        setMounted(true);
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [mounted]);

  function handleAnimationEnd() {
    if (!active) {
      setMounted(false);
    }
  }

  if (ref.current && mounted) {
    return createPortal(
      <Container>
        <Backdrop role="presentation" onClick={onClickBackdrop} />
        <ContentBox active={active} onAnimationEnd={handleAnimationEnd}>
          {children}
        </ContentBox>
      </Container>,
      ref.current
    );
  }

  return null;
}

const Container = styled.div<{
  active: boolean;
}>`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.85);
`;

const ContentBox = styled.div<{
  active: boolean;
}>`
  position: relative;
  z-index: 10;
  min-width: 300px;
  max-width: 1140px;
  background-color: #fff;
  padding: 8rem;
  overflow: hidden;
  box-shadow: 0px 4px 12px 1px rgba(35, 35, 35, 0.35);
  ${(props) =>
    props.active
      ? css`
          animation: ${popInFromBottom} 0.2s forwards ease-in-out;
        `
      : css`
          animation: ${popOutToBottom} 0.2s forwards ease-in-out;
        `}
`;
