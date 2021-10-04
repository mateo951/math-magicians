import React from 'react';
import style from './home.module.css';

const Home = () => (
  <div key="Homepage">
    <h1 className={style.title}>Welcome to our page</h1>
    <p className={style.description}>
      Enjoy your calculations!
    </p>
  </div>
);

export default Home;
