import styled from '@emotion/styled';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { Button } from '@common/ui/Button/Button';

import { LabelTextInput } from './LabelTextInput';

type SignUpFormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export function SignUpForm() {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  });

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty }
  } = methods;

  const password = useWatch({ name: 'password', control });

  function signUp(data: SignUpFormValues) {
    const { email, password, passwordConfirm } = data;
    console.log(email, password, passwordConfirm);

    return;
  }

  const emailValidation = {
    required: '이메일을 입력해 주세요.',
    pattern: {
      value: /^([a-zA-Z0-9\-\_\.]+)@([a-zA-Z0-9_\-\_\.]+)\.([a-zA-Z]{2,5})$/,
      message: '이메일 형식이 맞지 않습니다.'
    }
  };

  const passwordValidation = {
    required: '비밀번호를 입력해 주세요.',
    minLength: {
      value: 8,
      message: '최소 8자, 최대 30자까지 입력할 수 있습니다.'
    },
    maxLength: {
      value: 30,
      message: '최소 8자, 최대 30자까지 입력할 수 있습니다.'
    },
    pattern: {
      value: /(?=.*[a-zA-Z0-9])(?=.*[-!#$%&'*+/=?^_{|}~.,@])(?=.{8,30}$).*/,
      message: '비밀번호는 특수문자 하나와 숫자 하나를 포함해야 합니다.'
    }
  };

  const passwordConfirmValidation = {
    required: '필수 정보를 입력해 주세요.',
    validate: (value: string) => password === value || '비밀번호를 다시 한번 확인해 주세요.'
  };

  return (
    <Container>
      <Heading>회원가입</Heading>
      <Caption>BRKT와 함께 하세요. 글을 쓰고, 댓글을 남기고, 지식을 나누세요.</Caption>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(signUp)}>
          <InputBox>
            <LabelTextInput
              name="email"
              type="email"
              label="이메일"
              placeholder="이메일을 입력해 주세요."
              validation={emailValidation}
            />
            <LabelTextInput
              name="password"
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
              validation={passwordValidation}
            />
            <LabelTextInput
              name="passwordConfirm"
              type="password"
              label="비밀번호 확인"
              placeholder="비밀번호를 확인해 주세요."
              validation={passwordConfirmValidation}
            />
          </InputBox>
          <Button type="submit" text="가입하기" disabled={!isValid || !isDirty} />
        </form>
      </FormProvider>
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.headline2};
  margin-bottom: 24px;
`;

const Caption = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  display: block;
  font-size: ${(props) => props.theme.fontSize.caption1};
  margin-bottom: 48px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 72px;
`;

const SocialLogInBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
