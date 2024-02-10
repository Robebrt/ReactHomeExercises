import { Input } from "../components/Input/Input";
import { PageWrapper } from "./styles";
import { useState, useEffect } from 'react';
import { User } from "../components/UserCard/types";
import Slideshow from "../components/SlideShow/SlideShow";

export const Home = () => {
  const [numUsers, setNumUsers] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchRandomUsers();
  }, [numUsers]);

  const fetchRandomUsers = async () => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${numUsers}`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleNumUsersChange = (value: number) => {
    setNumUsers(value);
  };
  return (
    <PageWrapper>
      <Input value={numUsers} onChange={handleNumUsersChange} />
      {users ? (<Slideshow users={users}></Slideshow>) : <div>Loading...</div> }
    </PageWrapper>
  );
};
