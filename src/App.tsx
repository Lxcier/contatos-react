import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { Contact } from "./redux/ContactsSlice";
import {
  AppContainer,
  SearchBar,
  Title,
  TitleContainer,
  ToggleButton,
} from "./styles";

const App: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingContact, setEditingContact] = useState<Contact | undefined>(
    undefined
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleAddContactClick = () => {
    setEditingContact(undefined);
    setShowForm(!showForm);
  };

  return (
    <Provider store={store}>
      <AppContainer>
        <TitleContainer>
          <Title>Lista de Contatos</Title>
          <div className="box">
            <SearchBar
              type="text"
              placeholder="Buscar contatos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ToggleButton onClick={handleAddContactClick}>
              {showForm ? "Fechar Formulário" : "Adicionar Contato"}
            </ToggleButton>
          </div>
        </TitleContainer>
        {showForm && (
          <ContactForm
            currentContact={editingContact}
            onSave={() => setShowForm(false)}
          />
        )}
        <ContactList searchTerm={searchTerm} onEdit={setEditingContact} />
      </AppContainer>
    </Provider>
  );
};

export default App;
