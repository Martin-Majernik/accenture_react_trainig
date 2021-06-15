import React from 'react';
import style from './appStyle';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import './styles.css';

// const GOOGLE_KEY = process.env.staging;

// Component
// resuable
const a = ({ firstName, lastName }) => (
  <>
    <h1>{firstName}</h1>
    <h1>{lastName}</h1>
    <Modal description="Printing from App.js" />
    <Button
      type="button"
      onClick={() => {
        alert('click me');
      }}
    >
      Click Me
    </Button>
    <Button
      type="button"
      onClick={() => {
        alert('Press me');
      }}
    >
      Press Me
    </Button>
    <Button
      type="submit"
      onClick={() => {
        alert('click me');
      }}
    >
      Hover Me
    </Button>
  </>
);

export default a;
