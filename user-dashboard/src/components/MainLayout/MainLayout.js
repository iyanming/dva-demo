import React from 'react';
import './MainLayout.less';
import Header from './Header';

function MainLayout({ children, location }) {
  return (
    <div className="normal">
      <Header location={location} />
      <div className="content">
        <div className="main">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
