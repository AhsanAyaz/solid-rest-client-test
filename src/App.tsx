import type { Component } from 'solid-js';
import { Router, Routes, Route, hashIntegration } from 'solid-app-router';

import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from './NavBar';

const App: Component = () => {
  return (
    <Router source={hashIntegration()}>
      <div class={styles.App}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" component={() => <div>Test</div>}></Route>
        <Route path="/about" component={() => <div>About</div>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
