import React from 'react'

class Statevalue extends React.Component
{
    constructor()
    {
        super()
        
            this.state=
            {
                name:"Panner Chilli",
                qty:1
            }
        
    }

    changeqty = () =>{
        console.log("in Change Qty")
        this.setState({
       qty : this.state.qty+1          

        })
    }

    render =()=>{

       return( <>
        <h1>Items ordered</h1>
        <h2>{this.state.name} Quatity {this.state.qty}</h2>
        <button type='button' onClick={this.changeqty}>Add more</button>
        </>
   ) }
}


export default Statevalue;