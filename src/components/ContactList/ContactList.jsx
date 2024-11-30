import Contact from "/src/components/Contact/Contact.jsx";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={s.form}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        ></Contact>
      ))}
    </div>
  );
};

export default ContactList;
