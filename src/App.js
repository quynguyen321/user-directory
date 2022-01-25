import './reset.css';
import './index.css';
import { Component } from 'react';
import Top from './components/Top.js'
import Slides from './components/Slides.js';

import data from './data';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      peopleArr: data
    }
  }


  render() {

    console.log(this.state.peopleArr);

    return (
      <div id = "main">
        <Top />
        <Slides peopleArr = {this.state.peopleArr}/>
      </div>
    );
  }
}

export default App;
