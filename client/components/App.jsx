import React from 'react'

import Monkey from './Monkey'

const App = () => {
  return (
    <div className='body'>
      <div className="tree">
        <img src="/images/tree" alt="Tree"/>
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

