import { Route, Routes} from 'react-router-dom';
import React, { Suspense } from 'react';

const PrivateRoute = React.lazy(() => import('../PrivateRoute/PrivateRoute'));
const RestrictedRoute = React.lazy(() => import('../RestrictedRoute/RestrictedRoute'));
const HomePage = React.lazy(() => import('../../pages/HomePage'));
const RegistrationPage = React.lazy(() => import('../../pages/RegistrationPage'));
const LoginPage = React.lazy(() => import('../../pages/LoginPage'));
const TeachersPage = React.lazy(() => import('../../pages/TeachersPage'));


const AppRoutes = () => {
    return (
        <div>
          <Suspense>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} /> } />
               <Route path='/login' element={<RestrictedRoute component={<LoginPage />} /> } />
               <Route path='/teachers' element={<PrivateRoute component={<TeachersPage />} />} />
            </Routes>
          </Suspense>
        </div>
    )
}

export default AppRoutes;