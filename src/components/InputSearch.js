import React from 'react'

class InputSearch extends React.Component{

    state = {heroname : ''}
    onSubmitSent = (event) => {
        event.preventDefault() // prevent the browser reload or refresh
        this.props.onSearchonAPI(this.state.heroname)
    }

    render(){
        return (
            <div>
                <form onSubmit={ this.onSubmitSent }>
                    <input 
                        type="text"
                        placeholder="Searching..."
                        onChange={(inputData) => this.setState({ heroname:inputData.target.value })}
                        value={this.state.heroname}
                    />
                    <i className='search icon' ></i>
                </form>
            </div>
        )
    }

}

export default InputSearch

