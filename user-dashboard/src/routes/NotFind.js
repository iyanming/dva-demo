import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout';
import './NotFind.less';

function NotFind({ location }) {
  return (
    <MainLayout location={location}>
      <div className="normal">
        <p className="title">出错啦，哦～，一不小心进入了未知领域，请点击下面的按钮返回首页～</p>
        <Link to="/"><button className="return">返回首页</button></Link>
      </div>
    </MainLayout>
  );
}

export default connect()(NotFind);
