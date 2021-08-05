import React from 'react'

const ShowHeroData = (props) => {

    if (typeof(props.heroData) !== 'undefined') {
        const listaHeroes = props.heroData.map((hero) => {
            return (
                <div>
                <p></p>
                <p></p>
                <h3>Nome: {hero.name}</h3>
            <img key={hero.id} 
                    src={ hero.image.url } alt="{hero.name}" />
                </div>
            )
            })
        
        return(
            <div>
                { listaHeroes }
            </div>
        )
    
    }
    else {
        return (
            <div>
                <p></p>
                <p></p>
                <h2>Nao existem Resultados no Momento</h2>
            </div>
        )
    }
}
export default ShowHeroData
