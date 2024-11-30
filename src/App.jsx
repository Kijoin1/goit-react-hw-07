import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg";

function App() {
  const dispatch = useDispatch();
  const Loading = useSelector(selectLoading);
  const Error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {Error && <ErrorMsg />}
        {!Error && <ContactList />}
        {Loading && <Loader />}
      </div>
    </>
  );
}

export default App;
