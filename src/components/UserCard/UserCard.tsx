import { FC } from "react";
import { StyledUserCard } from "./styles";
import {User} from './types';

interface Props {
    user: User | null;
}

export const UserCard: FC<Props> = ({user}) => (
    <StyledUserCard>
       {user && (
            <>
                <img src={user.picture?.medium} alt="Person image" /> {/* Use optional chaining */}
                <h4>{`${user.name?.first} ${user.name?.last}`}</h4> {/* Use optional chaining */}
            </>
        )}
    </StyledUserCard >
);