import React from 'react'

class Monkey extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            hunger: 5,
            alive: true
        }
    }

    render (){
        return (
            <div>
                Monkey
            </div>
        )
    }
}

export default Monkey