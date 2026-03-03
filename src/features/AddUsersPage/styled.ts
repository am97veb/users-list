import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin: 0 0 25px 0;
  padding: 0;
`;

export const Legend = styled.legend`
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const FieldSignature = styled.span`
  text-transform: capitalize;
  display: inline-block;
  width: 180px;
`;

export const Label = styled.label`
  border: none;
  margin: 10px 0 10px 20px;
  display: flex;
`;
