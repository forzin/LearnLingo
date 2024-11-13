import React from 'react';

const RegistrationForm = React.lazy(() => import('../components/RegistrationForm/RegistrationForm'));

const RegistrationPage = () => {
    return (
        <>
           <div>
               <RegistrationForm />
           </div>
       </>
    )
}

export default RegistrationPage;