import styled from '@emotion/styled';
import React from 'react';

export function Footer() {
  return (
    <Container>
      <CopyWrightWrapper>
        <CopyWright>COPYRIGHTⓒ2022</CopyWright>
        <CopyWright>BRKT All rights reserved.</CopyWright>
      </CopyWrightWrapper>
      <AdressWrapper>
        <Adress>서울 성동구 서울로 123 브라켓 BRKT</Adress>
        <Adress>Seoul-ro, Seongdong-gu, Seoul</Adress>
      </AdressWrapper>
      <LinkWrapper>
        <Link>info@brkt.kr</Link>
        <Link>recruit@brkt.kr</Link>
      </LinkWrapper>
      <TermsAndPolicyWrapper>
        <Terms>Terms</Terms>
        <Policy>Policy</Policy>
      </TermsAndPolicyWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'copyWright adress link'
    '. termsAndPolicy .';
  padding-top: ${(props) => props.theme.spacing[7]};
  padding-left: ${(props) => props.theme.spacing[9]};
  padding-bottom: ${(props) => props.theme.spacing[9]};
  width: 100%;
  height: 31rem;
  background-color: #232323;
`;

const CopyWrightWrapper = styled.div`
  grid-area: copyWright;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.surface};
`;

const CopyWright = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.caption2};
  color: ${(props) => props.theme.colors.surface};
`;

const AdressWrapper = styled.div`
  grid-area: adress;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Adress = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.caption2};
  color: ${(props) => props.theme.colors.surface};
`;

const LinkWrapper = styled.div`
  grid-area: link;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.surface};
`;

const Link = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.caption2};
  color: ${(props) => props.theme.colors.surface};
`;

const TermsAndPolicyWrapper = styled.div`
  grid-area: termsAndPolicy;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Terms = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.caption2};
  color: ${(props) => props.theme.colors.surface};
`;

const Policy = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.caption2};
  color: ${(props) => props.theme.colors.surface};
`;
