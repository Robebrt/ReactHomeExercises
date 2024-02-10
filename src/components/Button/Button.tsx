import { FC, ReactNode } from "react";
import { StyledButton } from "./styles";
import { ButtonVariants } from "./types";

interface Props {
  children?: ReactNode;
  ariaLabel: string;
  variant?: ButtonVariants;
  onClickAction:(param?: any) => void;
}

export const Button: FC<Props> = ({ children, ariaLabel, variant, onClickAction }) => (
  <StyledButton aria-label={ariaLabel} variant={variant} onClick={()=>onClickAction()}>
    {children}
  </StyledButton>
);
