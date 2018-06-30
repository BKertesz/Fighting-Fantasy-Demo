import React from 'react'

class Player extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            stats:{
                skill:0,
                stamina:0,
                luck:0
            },
            equipment:[],
            consumables:[],
            currency:0,
            knowledge:[],
            ailments:[],
            other:[]
        }
    }

    render(){

        return(
            <div>
                <h2>Player Stats</h2>
                <h3>Skill:</h3>
            </div>
        )
    }
}

export default Player