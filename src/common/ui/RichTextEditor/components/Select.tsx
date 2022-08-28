import styled from '@emotion/styled';
import { Key, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';

type SelectPropTypes = {
  options: OptionHTMLAttributes<HTMLOptionElement>['value'][];
  value: SelectHTMLAttributes<HTMLSelectElement>['value'];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({ options, value, onChange }: SelectPropTypes) {
  return (
    <EditorSelect onChange={onChange} value={value}>
      <option hidden={true} value="" />
      {options.map((option) => (
        <option key={option as Key} value={option}>
          {option}
        </option>
      ))}
    </EditorSelect>
  );
}

const EditorSelect = styled.select`
  border: 0;
  display: flex;
  background: none;
  border-radius: 10px;
  padding: 8px;
  vertical-align: middle;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 14px;
  color: #777;
  text-overflow: ellipsis;
  text-transform: capitalize;
  width: 130px;
`;
