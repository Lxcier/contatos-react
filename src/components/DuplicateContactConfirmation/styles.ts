import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    margin: 5px 0;
    color: #666;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }

  &:last-child {
    margin-right: 0;
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;
