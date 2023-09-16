import React, { useEffect } from 'react';
import { fetchUsers } from '../features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {

    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();

    console.log(users);

    useEffect(() => {

        dispatch(fetchUsers());

    }, [])

    return (
        <div>

        </div>
    );
};

export default Users;