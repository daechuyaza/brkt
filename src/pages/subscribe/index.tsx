import { Button } from '@common/ui/Button/Button';
import { TextInput } from '@common/ui/TextInput/TextInput';
import styled from '@emotion/styled';
import { FormProvider, useForm } from 'react-hook-form';

type FormValue = {
  email: string;
};

function Subscribe() {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: ''
    }
  });

  const {
    handleSubmit,
    formState: { isValid, isDirty }
  } = methods;

  function subscribe(data: FormValue) {
    const { email } = data;

    console.log(email);
  }

  const emailValidation = {
    required: '이메일을 입력해 주세요.',
    pattern: {
      value: /^([a-zA-Z0-9\-\_\.]+)@([a-zA-Z0-9_\-\_\.]+)\.([a-zA-Z]{2,5})$/,
      message: '이메일 형식이 맞지 않습니다.'
    }
  };

  return (
    <Container className="subscribe">
      <Heading>Subscription</Heading>
      <Caption>BRKT의 글들을 이메일로 받아보세요! 한 주에 하나씩 당신에게로 배송됩니다.</Caption>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(subscribe)}>
          <InputWrapper>
            <TextInput
              name="email"
              size="large"
              placeholder="이메일을 입력해주세요."
              validation={emailValidation}
            />
          </InputWrapper>
          <Button
            text="구독하기"
            type="submit"
            size="large"
            theme="primary"
            disabled={!isValid || !isDirty}
          />
        </form>
      </FormProvider>
    </Container>
  );
}

const Container = styled.div`
  padding-left: ${(props) => props.theme.spacing[8]};
  padding-right: ${(props) => props.theme.spacing[8]};
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.headline1};
`;

const Caption = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  display: block;
  font-size: ${(props) => props.theme.fontSize.caption1};
  margin-bottom: 48px;
`;

const InputWrapper = styled.div`
  margin-bottom: 48px;
`;

export default Subscribe;
