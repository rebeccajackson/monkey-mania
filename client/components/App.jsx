import React from 'react'

import Monkey from './Monkey'
import Meter from './Meter';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      monkey1Hunger: 5,
      monkey2Hunger: 5,
      monkey3Hunger: 5
    }
  }

  getHunger = (id, hunger) =>{
    console.log(id, hunger)
    this.state[`monkey${id}Hunger`] = hunger
  }

  render(){
    return (
    <div className='body'>
      <div className="tree">
        <img src="/images/tree" alt="Tree"/>
      </div>
      <div>
        <Meter percent={0.5}/>
      </div>
      <div className="branch">
          <img src="/images/branch" alt="Branch"/>
      </div>
      <div className='monkey-page'>
        <Monkey id='2' sendHunger={this.getHunger}/>
        <Monkey id='1' sendHunger={this.getHunger}/>
        <Monkey id='3' sendHunger={this.getHunger}/>
      </div>

    </div>
    )
  }
}

export default App

