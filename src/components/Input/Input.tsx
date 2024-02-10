import { FC } from "react";
import { StyledInput } from "./styles";

interface Props {
    value: number;
    onChange: (value: number) => void;
}

export const Input: FC<Props> = ({value, onChange}) => 
    <StyledInput 
        type="number" 
        value={value} 
        onChange={(e)=> onChange(parseInt(e.target.value))}
    />;
