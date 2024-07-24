import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  position: relative;

  h3 {
    margin: 0;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
  }

  .edit-button,
  .remove-button {
    margin-top: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
  }

  .edit-button {
    background-color: #007bff;
    color: #fff;
    margin-right: 10px;

    &:hover {
      background-color: #0056b3;
    }
  }

  .remove-button {
    background-color: #dc3545;
    color: #fff;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const EditForm = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 9999;
  background-color: #fff;
  margin-top: 20px;
  animation: fadeIn 0.5s;

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
