import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { Contact as ContactType } from "../../redux/ContactsSlice";
import { ContactCard, Container, EditForm } from "./styles";
import ContactForm from "../ContactForm";
import Contact from "../Contact";

interface Props {
  searchTerm: string;
  onEdit: (contact: ContactType) => void;
}

const ContactList: React.FC<Props> = ({ searchTerm, onEdit }) => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [contactToEdit, setContactToEdit] = useState<ContactType | undefined>(
    undefined
  );

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  const handleEdit = (contact: ContactType) => {
    setContactToEdit(contact);
    onEdit(contact);
  };

  return (
    <Container>
      {filteredContacts.length ? (
        filteredContacts.map((contact) => (
          <ContactCard key={contact.id}>
            <Contact
              contact={contact}
              onEdit={handleEdit}
              isEditing={contactToEdit?.id === contact.id}
            />
            {contactToEdit && contactToEdit.id === contact.id && (
              <EditForm>
                <ContactForm
                  currentContact={contactToEdit}
                  onSave={() => setContactToEdit(undefined)}
                  onCancel={() => setContactToEdit(undefined)}
                />
              </EditForm>
            )}
          </ContactCard>
        ))
      ) : (
        <p>Sem contatos encontrados.</p>
      )}
    </Container>
  );
};

export default ContactList;
