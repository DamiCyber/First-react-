import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const { count, username } = useSelector(state => ({
        count: state.counter.value,
        username: state.user.value.userName,
    }));
    
    return (
        <div>
            <h1>Counter: {count}</h1>
            <h1>Username: {username}</h1>
        </div>
    );
};

export default Home;
