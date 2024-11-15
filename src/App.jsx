import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import React, { Suspense, useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectUserDataIsRefreshing } from './redux/auth/selectors';
import { Toaster } from 'react-hot-toast';

const AppRoutes = React.lazy(() => import('./components/AppRoutes/AppRoutes'));
const Layout = React.lazy(() => import('./components/Layout/Layout'));

function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserDataIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if(isRefreshing) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <Suspense>
        <Layout >
          <AppRoutes />
        </Layout>
        <Toaster />
      </Suspense>
    </>
  )
};

export default App
