import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import List from './components/List';
import { Heading } from './components/Heading';
import { Counter } from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Counter name="Chirag" color="red" />
    <Counter name="Chetana" color="green"/>
    <Heading />
    <List />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
