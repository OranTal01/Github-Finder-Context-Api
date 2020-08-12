import React, { useContext } from 'react';

import GithubContext from '../../context/github/githubContext';

import './notifications.scss';

const Notifications = (_) => {
  const context = useContext(GithubContext);

  const { notification, closeNotification } = context;

  return (
    <div>
      {(notification.msg || notification.type) && (
        <div className={`alert alert-${notification.type}`}>
          <div className='notification-container'>
            <i className='fas fa-info-circle'>{notification.msg}</i>
            <i
              className='fas fa-times close-btn'
              onClick={() => closeNotification()}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
