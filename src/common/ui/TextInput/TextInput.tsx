import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';
import { Path, RegisterOptions, useFormContext } from 'react-hook-form';

type IFormValue = {
  [key: string]: string;
};

type Props = {
  defaultText?: string;
  disabled?: boolean;
  name: Path<IFormValue>;
  placeholder?: string;
  prefix?: React.ReactNode;
  size?: 'medium' | 'large';
  surfix?: React.ReactNode;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  validation?: RegisterOptions;
};

type SizeTypes = Record<string, (props: Theme) => SerializedStyles>;

export function TextInput({
  defaultText,
  disabled = false,
  name,
  placeholder,
  prefix,
  size = 'medium',
  surfix,
  type = 'text',
  validation
}: Props) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <>
      <InputWrapper>
        {prefix}
        <Input
          {...register(name, validation)}
          disabled={disabled}
          $size={size}
          placeholder={placeholder}
          type={type}
          defaultValue={defaultText}
        />
        {surfix}
      </InputWrapper>
      <ErrorMessage>{errors[name]?.message}</ErrorMessage>
    </>
  );
}

const sizes: SizeTypes = {
  large: (theme: Theme) => css`
    font-size: ${theme.fontSize.subtitle};
    font-weight: bold;

    &::placeholder {
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSize.subtitle};
    }
  `,
  medium: (theme: Theme) => css`
    font-size: ${theme.fontSize.caption1};
    font-weight: normal;

    &::placeholder {
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSize.caption1};
    }
  `
};

const Input = styled.input<{
  $size: 'medium' | 'large';
}>`
  background: transparent;
  border: none;
  display: block;
  flex: 1;
  outline: none;
  padding: 0;

  ${(props) => sizes[props.$size](props.theme)};
`;

const InputWrapper = styled.div`
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.onBackground}`};
  display: flex;
  padding-bottom: ${(props) => props.theme.spacing[2]};
  padding-top: ${(props) => props.theme.spacing[2]};
  width: 100%;
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.error};
  display: block;
  height: 16px;
  font-size: ${(props) => props.theme.fontSize.caption2};
  margin-top: ${(props) => props.theme.spacing[0]};
`;
