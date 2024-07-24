import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
  }
`;

export const EditButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 0.9em;
  margin-right: 10px;

  &:disabled {
    background-color: #5a6268;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

export const RemoveButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #dc3545;
  color: #fff;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    background-color: #c82333;
  }
`;
