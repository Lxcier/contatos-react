import styled from "styled-components";

export const FormContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CancelButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #6c757d;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  margin-left: 10px;

  &:hover {
    background-color: #5a6268;
  }
`;

export const StyledPhoneInput = styled.div`
  .PhoneInput {
    display: flex;
    align-items: center;

    &:focus-within {
      border-color: #007bff;
    }
  }

  .PhoneInputInput {
    border: none;
    outline: none;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1em;
    width: 100%;
    padding-left: 10px;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  .PhoneInputCountry {
    display: flex;
    align-items: center;
  }

  .PhoneInputCountrySelect {
    border: none;
    outline: none;
    background: transparent;
    font-size: 1em;
    cursor: pointer;
  }

  .PhoneInputCountryIcon {
    width: 20px;
    height: 20px;
  }
`;
