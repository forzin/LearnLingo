import React from 'react';

const LoginForm = React.lazy(() => import('../components/LoginForm/LoginForm'));

const LoginPage = () => {
   return (
      <>
         <div>
            <LoginForm />
         </div>
     </>
   )
}

export default LoginPage;