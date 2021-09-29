import React from 'react';
import style from './style/home.module.css';

const Home = () => (
  <div key="Homepage">
    <h1 className={style.title}>
      Welcome to our Page
    </h1>
    <p className={style.description}>
      Enjoy your calculations!
    </p>
  </div>
);

export default Home;
