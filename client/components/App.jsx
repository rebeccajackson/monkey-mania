import React from 'react'

import Monkey from './Monkey'
import Meter from './Meter';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      monkey1Hunger: 5,
      monkey2Hunger: 5,
      monkey3Hunger: 5,
      avgHunger: 0.5
    }

    this.interval = setInterval(this.meterUpdate, 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
}

  getHunger = (id, hunger) =>{
    this.state[`monkey${id}Hunger`] = hunger
  }

  meterUpdate = () => {
    var percent = Object.values(this.state).slice(0,3).reduce((acc, cur) => {return acc + cur}, 0) / 30
    this.setState({avgHunger: percent})
  }

  render(){
    return (
    <div className='body'>
    <div className="background-image"></div>
      <div>
        <Meter percent={this.state.avgHunger}/>
      </div>
      <div className="branch">
          <img src="/images/branch" alt="Branch"/>
      </div>
      <div className='monkey-page'>
        <Monkey id='2' sendHunger={this.getHunger}/>
        <Monkey id='1' sendHunger={this.getHunger}/>
        <Monkey id='3' sendHunger={this.getHunger}/>
        <div className='branch'>
          <img src="/images/branch.svg" alt="Branch"/>
        </div>
      </div>

    </div>
    )
  }
}

export default App

