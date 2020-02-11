import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './index.less';

class App extends Component {


  componentDidMount() {

    console.log(this.decodeString('3[2[10[a]2[bc]]3[cd]]'))

  }

  decodeString = (str) =>  {
    let inputStr = str
    while(/\[|\]/g.test(inputStr)) {
      inputStr = inputStr.replace(/(\d+)\[(\w+)\]/g,function(a,b,c){
        return new Array(Number(b)).fill(String(c)).join("")
      })
    }
    return inputStr
   }

  render() {
    return (
      <div className="app">
        test
      </div>
    );
  }
}

export default App;
