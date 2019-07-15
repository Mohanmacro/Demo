import React from 'react'

class Todolist extends React.component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            name=""
            
        }
    }
    render()
    {
     return(
         <React.Fragment>
             {
        <div>
            <input  type="text" value={this.state.name} onChange={e=>this.setState({name:e.targetvalue})}/>
            

        </div>

       
             }
     </React.Fragment>
     )
             }
}
export default Todolist