import React from 'react';
import { connect } from 'dva';
import './Users.less';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';

function Users({ location }) {
  return (
    <MainLayout location={location}>
      <div className="normal">
        <UsersComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Users);
