import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f4f4f9;
  }


  .box {
    display: flex;
    gap: 6px;
    @media screen and (max-width: 768px) {
      margin-top: 18px;
    }
  }
`;

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 2.5em;
  margin: 0;
  font-weight: bold;
  letter-spacing: 1px;
  border-bottom: 2px solid #007bff;
  display: inline-block;
  padding-bottom: 10px;
`;

export const SearchBar = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  width: 200px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ToggleButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

export const ContactCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 10px;
    font-size: 1.5em;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
  }

  div {
    display: flex;
    gap: 10px;
    margin-top: 10px;

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      font-size: 0.9em;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

      &.edit-button {
        background-color: #007bff;
        color: white;

        &:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }
      }

      &.remove-button {
        background-color: #dc3545;
        color: white;

        &:hover {
          background-color: #c82333;
          transform: translateY(-2px);
        }
      }
    }
  }
`;

export const EditForm = styled.div`
  margin-top: 10px;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
