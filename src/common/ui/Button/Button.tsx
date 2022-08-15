import styled from '@emotion/styled';

type Props = {
  disabled?: boolean;
  text: string;
  theme?: 'primary' | 'onBackground';
  type?: 'button' | 'submit';
  size?: 'medium' | 'large';
  onClick?: () => void;
};

export function Button({
  disabled = false,
  text,
  theme = 'onBackground',
  size = 'medium',
  type = 'button',
  onClick
}: Props) {
  return (
    <Container type={type} onClick={onClick} colorTheme={theme} disabled={disabled} $size={size}>
      {text}
    </Container>
  );
}

const Container = styled.button<{
  colorTheme: 'primary' | 'onBackground';
  disabled: boolean;
  $size: 'medium' | 'large';
}>`
  background: none;
  background-color: ${(props) => {
    if (props.disabled) {
      return props.theme.colors.secondary;
    }

    return props.theme.colors[props.colorTheme];
  }};
  color: ${(props) => props.theme.colors.surface};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border: none;
  font-size: ${(props) => {
    if (props.$size === 'large') {
      return props.theme.fontSize.subtitle2;
    }

    return props.theme.fontSize.caption2;
  }};
  font-weight: bold;
  outline: none;
  padding-bottom: ${(props) => props.theme.spacing[4]};
  padding-top: ${(props) => props.theme.spacing[4]};
  width: 100%;
`;
