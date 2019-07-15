import React from 'react'

class Sample2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showH1: true,
            headerText: ""
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.showH1 && (
                        <div>
                            
                            <h1 style={{ color: 'blue' }}>{this.state.headerText}</h1>
                        </div>
                    )
                }

                
                <input type="text" value={this.state.headerText} onChange={e => this.setState({ headerText: e.target.value })} />
            </React.Fragment>

        )

    }
}

export default Sample2