import styled from "styled-components";

const DropdownSelect = styled.select`
  width: 100px;
  padding: 5px 10px;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  outline: none;
  box-shadow: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }

  option {
    text-align: left;
  }
`;

export default {
  DropdownSelect,
};
