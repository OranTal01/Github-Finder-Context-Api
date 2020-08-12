import React, { useContext } from 'react';

import Spinner from '../spinner/Spinner';
import User from '../user/User';

import GithubContext from '../../context/github/githubContext';

import './users.scss';

const Users = (_) => {
  const context = useContext(GithubContext);

  const { users, loading } = context;

  if (loading) return <Spinner />;

  return (
    <div>
      <div className='users-continuer'>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
