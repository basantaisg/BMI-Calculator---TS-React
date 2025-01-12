import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css'; // Import the custom CSS file

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);

  const calcBmi = () => {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (parsedWeight > 30 && parsedHeight > 120) {
      const heightInMeters = parsedHeight / 100;
      setBmi(parsedWeight / heightInMeters ** 2);
    } else {
      setBmi(0);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      '.title',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.out' }
    );
    gsap.fromTo(
      '.input-container',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo(
      '.button',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)',
        delay: 1,
      }
    );
  }, []);

  return (
    <div className='container'>
      <h1 className='title'>BMI Calculator</h1>

      <div className='input-container'>
        <input
          type='text'
          placeholder='Enter Weight (Kg)'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className='input'
        />
        <input
          type='text'
          placeholder='Enter Height (cm)'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className='input'
        />
        <button onClick={calcBmi} className='button'>
          Calculate
        </button>
        <p className='result'>
          Your BMI is{' '}
          <span className='bmi-value'>
            {bmi > 0 ? bmi.toFixed(2) : 'Invalid input'}
          </span>
        </p>
      </div>

      <div className='footer'>
        <p className='footer-text'>Stay Healthy!</p>
      </div>
    </div>
  );
};

export default App;
