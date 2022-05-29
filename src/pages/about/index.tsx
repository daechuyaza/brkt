import styled from '@emotion/styled';

import { Logo } from '@common/assets/icons/Logo';
import { aboutParagraphs } from '@common/constants/hardCoded';
import { Paragraph } from '@components/about/Paragraph';

function About() {
  return (
    <>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <DescriptionBox>
        <Caption>
          Share your knowledge <br />
          함께 보고, 읽고 씁니다.
        </Caption>
        <Divider />
        {aboutParagraphs.map((paragraph, index) => (
          <Paragraph key={index} title={paragraph.title} description={paragraph.description} />
        ))}
      </DescriptionBox>
    </>
  );
}

const LogoWrapper = styled.div`
  width: 40%;
  margin-bottom: ${(props) => props.theme.spacing[6]};
  margin-top: ${(props) => props.theme.spacing[8]};
  padding-left: ${(props) => props.theme.spacing[8]};
  padding-right: ${(props) => props.theme.spacing[8]};
`;

const DescriptionBox = styled.div`
  padding-left: ${(props) => props.theme.spacing[9]};
  padding-right: ${(props) => props.theme.spacing[9]};
  margin-bottom: 72px;
`;

const Caption = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontSize.caption1};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacing[6]};
`;

const Divider = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 1px;
  margin-bottom: ${(props) => props.theme.spacing[6]};
  width: 100%;
`;

export default About;
