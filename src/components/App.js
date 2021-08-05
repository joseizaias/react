import React from 'react'
import axios from 'axios'
import InputSearch from './InputSearch'
import ShowHeroData from './ShowHeroData'

class App extends React.Component{

    state = { heroData: [] } 

    onSearchonAPI = async (heroname) => {
        const resp = await axios.get(`https://www.superheroapi.com/api.php/3281071548580968/search/${heroname}`)
        this.setState({ heroData: resp.data.results })
    }

    render(){
        return(
            <div className='ui container' style={{ marginTop: '30px' }} >
                <InputSearch onSearchonAPI={this.onSearchonAPI} />
                <ShowHeroData heroData={ this.state.heroData } />
            </div>
        )
    }

}

export default App

