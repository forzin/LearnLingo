import React, { useEffect } from "react";
import { fetchTeachers } from "../redux/contacts/operations";
import { useDispatch } from "react-redux";

const TeachersList = React.lazy(() => import('../components/TeachersList/TeachersList.jsx'))

const ContactsPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

    return (
        <>
           <div>
               <TeachersList />
           </div>
       </>
    )
};

export default ContactsPage;