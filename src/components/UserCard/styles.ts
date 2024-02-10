import styled from "styled-components";

export const StyledUserCard = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
