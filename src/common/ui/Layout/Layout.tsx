import styled from '@emotion/styled';

import { Footer } from '@common/ui/Footer/Footer';
import { Header } from '@common/ui/Header/Header';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <Container>
      <HeaderArea>
        <Header />
      </HeaderArea>
      <ContentArea>{children}</ContentArea>
      <FooterArea>
        <Footer />
      </FooterArea>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(4.3rem, auto);
  grid-template-areas:
    'header'
    'content'
    'footer';
`;

const HeaderArea = styled.div`
  grid-area: header;
`;

const ContentArea = styled.div`
  grid-area: content;
`;

const FooterArea = styled.div`
  grid-area: footer;
`;
