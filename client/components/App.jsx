import React from 'react'

import Monkey from './Monkey'

const App = () => {
  return (
    <div className='body background-image'>
      <Monkey id='1' />
      <Monkey id='2' />
      <Monkey id='3' />

      <div className='branch'>
        <img src="/images/branch.svg" alt="Branch"/>
      </div>
 
    </div>
  )
}

export default App

