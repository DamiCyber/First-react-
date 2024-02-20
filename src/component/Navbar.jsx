
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/CounterSlice';
import { login } from '../Redux/UserSlice';

const Navbar = () => {
    const { count, username } = useSelector(state => ({
        count: state.counter.value,
        username: state.user.value.userName,
    }));
    const dispatch = useDispatch();
    const [inputUsername, setInputUsername] = useState('');

    const handleLogin = () => {
        dispatch(login(inputUsername));
    };

    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-xl font-bold">My Logo</div>
                    <div>
                        <ul className="flex space-x-4">
                            <Link to="/Home" className="text-white hover:text-gray-300">Home</Link>
                            <li>
                                <a href="/about" className="text-white hover:text-gray-300">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="text-center mt-8">
                <h1 className="text-3xl font-semibold mb-4">Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
                    className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={handleLogin}
                    className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mb-2 rounded-md focus:outline-none focus:bg-blue-600"
                >
                    Login
                </button>
                <div>
                    <h1>Username: {username}</h1>
                    <h1>Counter: {count}</h1>
                    <button
                        onClick={() => dispatch(decrement())}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Decrease
                    </button>
                    <button
                        onClick={() => dispatch(increment())}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Increase
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
