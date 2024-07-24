import React from "react";
import { Button, Container } from "./styles";
import { Contact } from "../../redux/ContactsSlice";

interface Props {
  contact: Contact;
  onEdit: () => void;
  onCancel: () => void;
}

const DuplicateContactConfirmation: React.FC<Props> = ({
  contact,
  onEdit,
  onCancel,
}) => {
  return (
    <Container>
      <h3>O contato já existe:</h3>
      <p>Nome: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Telefone: {contact.phone}</p>
      <h4>Deseja editar o contato?</h4>
      <div>
        <Button onClick={onEdit}>Editar</Button>
        <Button onClick={onCancel}>Cancelar</Button>
      </div>
    </Container>
  );
};

export default DuplicateContactConfirmation;
