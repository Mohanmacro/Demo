import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           num1:'',
           num2:'',
           result:'0'
        }   
}
clear()
{
        this.setState({
       num1:'',
       num2:''
        });
    }
add()
{ 
var a=( parseInt(this.state.num1) + parseInt(this.state.num2))
this.setState({
   result:a
    
     });
}
sub()
{
    var a=( (this.state.num1) - (this.state.num2))
    this.setState({
        num1:'',
        num2:'',
        result:a
         });
}
mul()
{
    var a=( (this.state.num1) * (this.state.num2))
    this.setState({
        num1:'',
        num2:'',
        result:a
         });
}
div()
{
    var a=( this.state.num1 / this.state.num2)
    this.setState({
        num1:'',
        num2:'',
        result:a
        
         });
}
modulo()
{
    var a=( (this.state.num1) / (this.state.num2))
    this.setState({
        num1:'',
        num2:'',
        result:a
         });
}
    render() {
       
        return (
            <React.Fragment>
                {
                        <div class="fullpage" >
                            
                            
                            <br/>
                           
                           <div class="container" >
                           <h1><b>Calculator</b></h1><br/>
                            <label ><b> Number 1: </b></label>
                         <input type="Number" class="align" value={this.state.num1} onChange={
                                e => this.setState({ num1:e.target.value}) 

                            }/>
                            
                             <br/> <br/>
                            <label ><b> Number 2: </b></label>
                            <input type="Number" class="align" value={this.state.num2} onChange={
                                e => this.setState({ num2:e.target.value}) 
                                
                            }/><br/><br/>
                            <label  ><b> RESULTS : </b></label> 
                            
                        
                             <input  type="" class="align" value={this.state.result} onChange={e=>this.setState({result:e.targetvalue})}/>
                             
                           <br/><br></br><div class="btn">
                            <button class="btn btn-primary" onClick={()=>this.clear()}>Clear</button><br/>
                            <button  class="btn btn-primary" onClick={()=>this.add()}>Add</button>
                            <br/>
                            <button  class="btn btn-primary"   onClick={()=>this.sub()}>sub</button><br/>
                            </div>
                            <div class="btn1">
                            <button  class="btn btn-primary" onClick={()=>this.div()}>div</button>
                            <br/> 
                            <button  class="btn btn-primary" onClick={()=>this.modulo()}>modulo</button>
                            <br/>
                            <button  class="btn btn-primary" onClick={()=>this.mul()}>mul</button>
                            </div>
                            
                            </div>
                            
                        </div>   
                }
            </React.Fragment>
        )
    }
}

export default Login