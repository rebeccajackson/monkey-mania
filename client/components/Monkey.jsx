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
     
    }
    
    render (){
        const id = this.state.id
        console.log(id)
        return (
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
        )
    }
}

export default Monkey