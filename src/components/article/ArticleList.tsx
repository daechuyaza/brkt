import styled from '@emotion/styled';

import { Avatar } from '@common/ui';

export function ArticleList() {
  return (
    <Container>
      <Avatar
        size={3.2}
        imageSrc={
          'https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'
        }
      />
    </Container>
  );
}

const Container = styled.div`
  display: 'flex';
  position: relative;
`;
