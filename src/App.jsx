import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import React, { Suspense, useEffect } from 'react';
import { fetchContacts } from './redux/contacts/operations';
import { refreshUser } from './redux/auth/operations';
import { selectUserDataIsRefreshing } from './redux/auth/authSlice';
import { Toaster } from 'react-hot-toast';
import { selectContacts } from './redux/contacts/contactsSlice';

const AppRoutes = React.lazy(() => import('./components/AppRoutes/AppRoutes'));
const Layout = React.lazy(() => import('./components/Layout/Layout'));

function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserDataIsRefreshing);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length === 0) return;
    dispatch(fetchContacts());
  }, [dispatch]);

  if(isRefreshing) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <Suspense>
        <Layout />
        <AppRoutes />
        <Toaster />
      </Suspense>
    </>
  )
};

export default App
