import { InputHTMLAttributes } from 'react';

import styled from '@emotion/styled';
import { Path, RegisterOptions } from 'react-hook-form';

import { TextInput } from '@common/ui/TextInput/TextInput';

type IFormValue = {
  [key: string]: string;
};

type Props = {
  defaultText?: string;
  disabled?: boolean;
  label: string;
  name: Path<IFormValue>;
  placeholder?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  validation?: RegisterOptions;
};

export function LabelTextInput({
  defaultText,
  disabled,
  label,
  name,
  placeholder,
  type,
  validation
}: Props) {
  return (
    <Container>
      <Label>
        <LabelText>{label}</LabelText>
        <TextInput
          defaultText={defaultText}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          type={type}
          validation={validation}
        />
      </Label>
    </Container>
  );
}

const Container = styled.div`
  min-width: 300px;
  width: 560px;
`;

const Label = styled.label`
  font-size: ${(props) => props.theme.fontSize.caption1};
`;

const LabelText = styled.span`
  font-size: ${(props) => props.theme.fontSize.caption2};
  font-weight: bold;
`;
