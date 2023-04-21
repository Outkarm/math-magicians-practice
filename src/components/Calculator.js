import React from 'react';
import '../Components.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="ans-sec">0</div>
      <div className="imput-area">
        <button className="imput-btn" type="button">
          AC
        </button>
        <button className="imput-btn" type="button">
          +/-
        </button>
        <button className="imput-btn" type="button">
          %
        </button>
        <button className="imput-btn sym" type="button">
          ÷
        </button>
        <button className="imput-btn" type="button">
          7
        </button>
        <button className="imput-btn" type="button">
          8
        </button>
        <button className="imput-btn" type="button">
          9
        </button>
        <button className="imput-btn sym" type="button">
          x
        </button>
        <button className="imput-btn" type="button">
          4
        </button>
        <button className="imput-btn" type="button">
          5
        </button>
        <button className="imput-btn" type="button">
          6
        </button>
        <button className="imput-btn sym" type="button">
          -
        </button>
        <button className="imput-btn" type="button">
          1
        </button>
        <button className="imput-btn" type="button">
          2
        </button>
        <button className="imput-btn" type="button">
          3
        </button>
        <button className="imput-btn sym" type="button">
          +
        </button>
        <button className="imput-btn big" type="button">
          0
        </button>
        <button className="imput-btn" type="button">
          .
        </button>
        <button className="imput-btn sym" type="button">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
