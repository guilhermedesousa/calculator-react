import React, {Component} from 'react';
import './Calculator.css';
import {Button} from '../components/Button'
import {Display} from '../components/Display';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.setOperation = this.setOperation.bind(this);
    }

    render() {
        return (
            <div className="calculator">
                <Display value='100'/>
                <Button label='AC' onClick={this.clearMemory} triple />
                <Button label='/' onClick={this.addDigit} operation />
                <Button label='7' onClick={this.addDigit} />
                <Button label='8' onClick={this.addDigit} />
                <Button label='9' onClick={this.addDigit} />
                <Button label='*' onClick={this.setOperation} operation />
                <Button label='4' onClick={this.addDigit} />
                <Button label='5' onClick={this.addDigit} />
                <Button label='6' onClick={this.addDigit} />
                <Button label='-' onClick={this.setOperation} operation />
                <Button label='1' onClick={this.addDigit} />
                <Button label='2' onClick={this.addDigit} />
                <Button label='3' onClick={this.addDigit} />
                <Button label='+' onClick={this.setOperation} operation />
                <Button label='0' onClick={this.setOperation} double />
                <Button label='.' onClick={this.addDigit} />
                <Button label='=' onClick={this.setOperation} operation />
            </div>
        );
    }

    clearMemory() {
        console.log('clearMemory');
    }

    setOperation(operation) {
        console.log(operation);
    }

    addDigit(n) {
        console.log(n);
    }
}