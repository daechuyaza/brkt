import styled from '@emotion/styled';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@common/ui/Button/Button';

import { LabelTextInput } from './LabelTextInput';
import { SocialLoginButtons } from './SocialLoginButtons';

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginForm() {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const {
    handleSubmit,
    formState: { isValid, isDirty }
  } = methods;

  function login(data: LoginFormValues) {
    const { email, password } = data;
    console.log(email, password);
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
    required: '비밀번호를 입력해 주세요.'
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(login)}>
        <Container>
          <Heading>시작하기</Heading>
          <Caption>
            BRKT와 함께 하세요. 글을 쓰고, 댓글을 남기고, 지식을 나누세요. <br />
            아이디가 없으시다면?
          </Caption>
          <SignInButton>회원가입하러 가기</SignInButton>
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
          </InputBox>
          <SocialLogInBox>
            <Subtitle>소셜로 로그인 하기</Subtitle>
            <SocialLoginButtons />
            <Caption>혹은</Caption>
            <Button type="submit" text="이메일로 로그인" disabled={!isValid || !isDirty} />
          </SocialLogInBox>
        </Container>
      </form>
    </FormProvider>
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
  font-size: ${(props) => props.theme.fontSize.caption1};
`;

const Subtitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.caption1};
  font-weight: bold;
  text-align: center;
`;

const SignInButton = styled.button`
  all: unset;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.caption1};
  font-weight: bold;
  margin-bottom: 48px;
  padding-left: 8px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;
`;

const SocialLogInBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
