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
        const id = this.state.id
        return this.state.alive ? (
            <div className={`monkey${id}area`}>
                <div className={`bananasButton banana${id}`}>
                    <button onClick={this.eat.bind(this)}>
                        <img src="/images/bananas.png" alt="Bananas"/>
                    </button>
                </div>
                <div className={`monkey${id} bounce-out-bottom`}>
                    <img  src={`/images/monkey${id}.png`} alt="Curious George"/>
                </div>
            </div>
        ) : ''
    }
}

export default Monkey