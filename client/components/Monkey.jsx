import React from 'react'

class Monkey extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            satiation: 5,
            alive: true
        }
    }

    eat = () => {
        this.state.satiation += 1
        if (this.state.satiation > 10) {
            this.state.alive = false
        }
    }

    render (){
        return (
            <div>
                <div>
                    <button onClick={this.eat.bind(this)}>Bananas</button>
                </div>
                <div>
                    Monkey
                </div>
            </div>
        )
    }
}

export default Monkey