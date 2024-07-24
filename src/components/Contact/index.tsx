import { useDispatch } from "react-redux";
import {
  Contact as ContactType,
  removeContact,
} from "../../redux/ContactsSlice";
import { Container, EditButton, RemoveButton } from "./styles";

interface Props {
  contact: ContactType;
  onEdit: (contact: ContactType) => void;
  isEditing: boolean;
}

const Contact: React.FC<Props> = ({ contact, onEdit, isEditing }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    const confirmed = window.confirm(
      "Você tem certeza que quer excluir este contato?"
    );
    if (confirmed) {
      dispatch(removeContact(contact.id));
    }
  };

  return (
    <Container>
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <div>
        <EditButton onClick={() => onEdit(contact)} disabled={isEditing}>
          {isEditing ? "Editando" : "Editar"}
        </EditButton>
        <RemoveButton onClick={handleRemove}>Remover</RemoveButton>
      </div>
    </Container>
  );
};

export default Contact;
