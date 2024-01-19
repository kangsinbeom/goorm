import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;

  label {
    color: #fac87d;
  }

  input {
    border: none;
    border-bottom: 1px solid #497649;
    padding: 10px 0;
    font-size: 16px;
    outline: none;
  }
`;
