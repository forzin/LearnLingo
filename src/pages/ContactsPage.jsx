import React from "react";

const ContactForm = React.lazy(() => import('../components/ContactForm/ContactForm'));
const ContactList = React.lazy(() => import('../components/ContactList/ContactList'));
const SeacrhBox = React.lazy(() => import('../components/SearchBox/SearchBox'));

const ContactsPage = () => {

    

    return (
        <>
           <div>
               <ContactForm />
               <SeacrhBox />
               <ContactList />
           </div>
       </>
    )
};

export default ContactsPage;