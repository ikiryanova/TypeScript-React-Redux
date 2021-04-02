import React, { Component } from 'react';
import { PropsType } from './counter-controller';

import './counter.css';

export class CounterComponent extends Component<PropsType> {
  handleIncrement = () => {
    this.props.countIncrement();
  }

  handleDecrement = () => {
    this.props.countDecrement();
  }

  render() {
    return (
      <div className="Wrapp">
        <div className="Count">Счетчик: {this.props.count}</div>
        <button className="Btn" onClick={this.handleIncrement}>+</button>
        <button className="Btn" onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}