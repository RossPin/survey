import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div>
        <h1>Intro</h1>
        <h3>This is a sample survey</h3>
        <Link className='button' to='/consent' >Start Survey</Link>
      </div>
    )
  }
}

export default Home