import React from 'react'

class Monkey extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.id,
            satiation: 5,
            alive: true
        }

        this.interval = setInterval(this.tickDown, 1000);
    }

    eat = () => {
        this.state.satiation += 1
        if (this.state.satiation > 10) {
            this.setState({alive:false})
        }
    }

    tickDown = () => {
        this.state.satiation -= 1
        if (this.state.satiation <= 0) {
            this.setState({alive:false})
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render (){
        return this.state.alive ? (
            <div className='monkey-page'>
                <div className="bananasButton">
                    <button onClick={this.eat.bind(this)}>
                        <img src="/images/bananas.png" alt="Bananas"/>
                    </button>
                </div>
                <div>
                    <img className='bounce-out-bottom' src="/images/monkey1.png" alt="Curious George"/>
                    Monkey
                </div>
            </div>
        ) : ''
    }
}

export default Monkey