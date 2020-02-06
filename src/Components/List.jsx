import React from 'react' 
import pokedex from '../pokedex'
import Search from './Search'
import { Link } from 'react-router-dom'

class List extends React.Component {
    state = {}

    componentWillMount() {
        this.getAllPokemon()
    }

    getAllPokemon = () => {
        let pokemons = [...pokedex.pokemon]
        this.setState({pokemons : pokemons})
    }

    render() {
        return (
            <div className="container">
                <Search pokemons={this.state.pokemons}/>
                <ul className="list">
                    {this.state.pokemons.map(pokemon => (
                        <Link to={ pokemon.num }  key={pokemon.num} className="item-outer">
                            <li className="item"><span className="numero">{ pokemon.num }</span> { pokemon.name } <img className="image-list" src={ pokemon.img } alt=" "/></li>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List