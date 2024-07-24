import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addContact, Contact, updateContact } from "../../redux/ContactsSlice";
import {
  Button,
  CancelButton,
  Form,
  FormContainer,
  Input,
  StyledPhoneInput,
} from "./styles";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DuplicateContactConfirmation from "../DuplicateContactConfirmation";

interface Props {
  currentContact?: Contact;
  onSave: () => void;
  onCancel?: () => void;
}

const ContactForm: React.FC<Props> = ({ currentContact, onSave, onCancel }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [duplicateContact, setDuplicateContact] = useState<Contact | null>(
    null
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    }
  }, [currentContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingContact = contacts.find(
      (contact) =>
        contact.name === name ||
        contact.email === email ||
        contact.phone === phone
    );

    if (existingContact && !currentContact) {
      setDuplicateContact(existingContact);
    } else if (currentContact) {
      dispatch(
        updateContact({ ...currentContact, name, email, phone: phone || "" })
      );
      onSave();
    } else {
      dispatch(
        addContact({
          id: Date.now().toString(),
          name,
          email,
          phone: phone || "",
        })
      );
      onSave();
    }
  };

  const handleEdit = () => {
    if (duplicateContact) {
      dispatch(
        updateContact({ ...duplicateContact, name, email, phone: phone || "" })
      );
      setDuplicateContact(null);
      onSave();
    }
  };

  const handleCancel = () => {
    setDuplicateContact(null);
  };

  if (duplicateContact) {
    return (
      <DuplicateContactConfirmation
        contact={duplicateContact}
        onEdit={handleEdit}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledPhoneInput>
          <PhoneInput
            placeholder="Telefone"
            value={phone}
            onChange={(value) => setPhone(value)}
            defaultCountry="BR"
            limitMaxLength={true}
          />
        </StyledPhoneInput>
        <div>
          <Button type="submit">
            {currentContact ? "Salvar" : "Adicionar"}
          </Button>
          {currentContact && (
            <CancelButton type="button" onClick={onCancel}>
              Cancelar
            </CancelButton>
          )}
        </div>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
