import React, { Component} from 'react'

class form extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            headerText: "",
            name: "",
            password: ""
        }
    }
    clicks=() =>
    {
        alert(`Name: $(this.state.name),`)
    }
    
   
    render()
    {
        const {name,heroName}=this.props
        return(
            
            <form  onSubmit={e => e.preventDefault()}>
                <div >
              <br/>
                <div class="log">
                <image src="D:/sampleapp/iota.jfif"></image>
                    <label ><b> USERNAME: </b></label>
                    <input  type="text" value={this.state.name} onChange={e => this.setState({name:e.targetvalue})}
                    placeholder="Username" /><br/><br/>
                    
                    <div class="password" >
                    <label ><b> SEED: </b></label>
                    <input  type="password"
                    placeholder="Seed"/><br/> 
                    
                    </div>    
                    <div class="login">           
                    <button onClick={ this.clicks }>LOGIN</button>
                    </div>
                    </div>
                    </div>
                    <div></div>
                            </form>
            
        )
    }
}


export default form