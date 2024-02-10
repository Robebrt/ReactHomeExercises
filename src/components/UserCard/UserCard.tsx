import { FC } from "react";
import { StyledUserCard } from "./styles";
import {User} from './types';

interface Props {
    user: User
}

export const UserCard: FC<Props> = ({user}) => (
    <StyledUserCard>
        <img src={user.picture.medium} alt="Person image"/>
        <h4>{user.name.first} {user.name.last}</h4>
    </StyledUserCard >
);