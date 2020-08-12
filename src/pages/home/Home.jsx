import React, { Fragment } from 'react';

import Users from '../../components/users/Users';
import Search from '../../components/search/Search';
import Notifications from '../../components/notifications/Notifications';

const Home = (_) => {
  return (
    <Fragment>
      <Notifications />
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
