import styled from '@emotion/styled';

import { Footer } from '@common/ui/Footer/Footer';
import { Header } from '@common/ui/Header/Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Container>
      <HeaderArea>
        <Header />
      </HeaderArea>
      {children}
      <FooterArea>
        <Footer />
      </FooterArea>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(11.4rem, auto);
  grid-template-areas:
    'header'
    'mainArticles'
    'mainWideButtons'
    'footer';
`;

const HeaderArea = styled.div`
  grid-area: header;
`;

const FooterArea = styled.div`
  grid-area: footer;
`;
