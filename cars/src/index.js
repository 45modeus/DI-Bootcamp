import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Car from './car';
import CarFunction from './CarFuntion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car make="BMW" model="x1" max_speed="200"/>
    <Car make="VW" model="polo" max_speed="150"/>
    <Car make="Nissan" model="March" max_speed="110"/>
    <CarFunction max_speed="110"/>
    <CarFunction max_speed="200"/>
  </React.StrictMode>
);
