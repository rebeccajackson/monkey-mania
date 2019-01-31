import React from 'react'

import Monkey from './Monkey'
import Meter from './Meter';

const App = () => {
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
        <Monkey id='1' />
        <Monkey id='2' />
        <Monkey id='3' />
      </div>

    </div>
  )
}

export default App

