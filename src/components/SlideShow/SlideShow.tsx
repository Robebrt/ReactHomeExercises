import { useState, useEffect } from 'react';
import {UserCard} from '../UserCard/UserCard'; 
import { User } from '../UserCard/types'; 
import { Button } from '../Button/Button';
import { FC } from 'react';

interface SlideshowProps {
  users: User[];
}

const Slideshow: FC<SlideshowProps> = ({ users }) => {
   
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(true);

    useEffect(() => {
    if (!users || users.length === 0) return;
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
        intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
    }, 2000);
    }

    return () => clearInterval(intervalId);
    }, [isRunning, users]);

    const handleStart = () => {
    setIsRunning(true);
    };

    const handleStop = () => {
    setIsRunning(false);
    };
    if (!users || users.length === 0) {
        return <div>No users available</div>;
    }
    return (
    <div>
        <UserCard user={users[currentIndex]} />
    <div>
        <Button onClickAction={handleStart} variant='primary' ariaLabel='startButton'>Start</Button>
        <Button onClickAction={handleStop} variant='primary' ariaLabel='startButton'>Stop</Button>
    </div>
    </div>
  );
};

export default Slideshow;