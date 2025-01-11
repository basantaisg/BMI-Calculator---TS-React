import './App.css';
import './index.css';
import { useState, FormEvent } from 'react';

function App() {
  // state
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const calcBmi = (e: FormEvent<HTMLFormElement>) => {
    // Prevent submitting to the server
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));

      // Logic for message
      if (bmiValue < 25) {
        setMessage('You are underweight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  const reload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div className='app'>
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type='number'
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
            />
          </div>

          <div>
            <label>Height (in)</label>
            <input
              type='number'
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value) || 0)}
            />
          </div>

          <div>
            <button className='btn' type='submit'>
              Submit
            </button>
            <button className='btn btn-outline' onClick={reload} type='button'>
              Reload
            </button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
