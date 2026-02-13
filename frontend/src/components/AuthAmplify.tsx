import React, { ReactNode, cloneElement, ReactElement } from 'react';
import { BaseProps } from '../@types/common';
import { Authenticator } from '@aws-amplify/ui-react';
import { useTranslation } from 'react-i18next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { SocialProvider } from '../@types/auth';

type Props = BaseProps & {
  socialProviders: SocialProvider[];
  children: ReactNode;
};

const AuthAmplify: React.FC<Props> = ({ socialProviders, children }) => {
  const { t } = useTranslation();
  const { signOut } = useAuthenticator();

  return (
    <Authenticator
      socialProviders={socialProviders}
      formFields={{
        signIn: {
          username: {
            placeholder: 'Ingresa un usuario @pulsosalud.com',
          },
        },
        signUp: {
          username: {
            placeholder: 'Ingresa un usuario @pulsosalud.com',
          },
        },
      }}
      components={{
        Header: () => (
          <div 
            className="mb-5 mt-10 flex flex-col items-center justify-center text-center font-bold text-aws-font-color-light"
            style={{ fontFamily: "'Helvetica Rounded', 'Arial Rounded MT Bold', 'Helvetica', 'Arial', sans-serif" }}>
            <div className="text-4xl">{t('app.name')}</div>
            <div className="text-3xl">{t('app.name2')}</div>
          </div>
        ),
      }}>
      <>{cloneElement(children as ReactElement, { signOut })}</>
    </Authenticator>
  );
};

export default AuthAmplify;
