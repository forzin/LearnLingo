import React, { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { useDispatch } from "react-redux";

const ContactForm = React.lazy(() => import('../components/ContactForm/ContactForm'));
const ContactList = React.lazy(() => import('../components/ContactList/ContactList'));
const SearchBox = React.lazy(() => import('../components/SearchBox/SearchBox'));

const ContactsPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
        <>
           <div>
               <ContactForm />
               <SearchBox />
               <ContactList />
           </div>
       </>
    )
};

export default ContactsPage;