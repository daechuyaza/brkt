import { useRouter } from 'next/router';

import { LogInForm } from '@components/auth/LogInForm';
import { SignUpForm } from '@components/auth/SignUpForm';
import { ROUTES } from '@common/constants/hardCoded';
import { Modal } from '@common/ui/Modal/Modal';

function AuthModal() {
  const router = useRouter();
  const { pathname, query } = router;

  const isAuthPath = router.asPath === ROUTES.LOG_IN || router.asPath === ROUTES.SIGN_UP;

  return (
    <Modal active={isAuthPath} onClickBackdrop={() => router.push(pathname)}>
      {query.auth === 'login' && <LogInForm />}
      {query.auth === 'signup' && <SignUpForm />}
    </Modal>
  );
}

export default AuthModal;
