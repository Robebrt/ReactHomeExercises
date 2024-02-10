import { Input } from "../components/Input/Input";
import { PageWrapper } from "./styles";
import { useState, useEffect } from 'react';
import { User } from "../components/UserCard/types";
import Slideshow from "../components/SlideShow/SlideShow";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchUsers } from '../reducers/usersReducer';
import { AppDispatch } from '../store/store';

export const Home = () => {
  const [numUsers, setNumUsers] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchUsers(numUsers));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [dispatch, numUsers]);


  const handleNumUsersChange = (value: number) => {
    setNumUsers(value);
  };
  return (
    <PageWrapper>
      <Input value={numUsers} onChange={handleNumUsersChange} />
      {users.length > 0 ? (<Slideshow users={users}></Slideshow>) : <div>Loading...</div> }
    </PageWrapper>
  );
};
