import React from 'react'

class Monkey extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.id,
            satiation: 5,
            alive: true
        }
    }

    eat = () => {
        // this.state.satiation += 1
        // if (this.state.satiation > 10) {
        //     this.state.alive = false
        // }
        console.log(this.state.id)
    }

    render (){
        return (
            <div className='monkey-page'>
                <div className="bananasButton">
                    <div className="tree">
                        <img src="/images/tree" alt="Tree"/>
                    </div>
                    <div className="branch">
                        <img src="/images/branch" alt="Branch"/>
                    </div>
                    <button onClick={this.eat.bind(this)}>
                        bananas
                        <img src="/images/bananas.png" alt="Bananas"/>
                    </button>
                </div>
                <div>
                    <img src="/images/monkey1.png" alt="Curious George"/>
                    Monkey
                </div>
            </div>
        )
    }
}

export default Monkey