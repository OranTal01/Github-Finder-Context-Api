import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';

const Search = (_) => {
  const [text, setText] = useState('');

  const context = useContext(GithubContext);

  const {
    hideSearchClearBTn,
    searchUser,
    toggleClearBtn,
    getRandomUsers,
    setNotification,
  } = context;

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimText = text.trim();
    if (!trimText) {
      setNotification('Please enter text', 'danger');
    } else {
      searchUser(text);
      setText('');
    }
  };

  const handleClearBtn = () => {
    getRandomUsers();
    hideSearchClearBTn();
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search User...'
          onChange={handleChangeText}
        />
        <button className='btn btn-dark btn-block'>Search</button>
      </form>
      {toggleClearBtn && (
        <button className='btn btn-light btn-block' onClick={handleClearBtn}>
          Clear Search
        </button>
      )}
    </div>
  );
};

export default Search;
