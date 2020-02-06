import React from 'react' 
import pokedex from '../pokedex'
import { Link } from 'react-router-dom'

class About extends React.Component {
    state = {}

    componentWillMount() {
        this.getItemPokemon()
    }

    getItemPokemon = () => {
        const pokemon = [...pokedex.pokemon]
        this.setState({pokemons: this.findPokemon(this.props.match.params.id, pokemon)})
    }

    findPokemon = (num, pokemons) => {
        return pokemons.filter(pokemon => pokemon.num === num)
    }

    render() {
        return (
            <div>   
                <nav className="navbar">
                    <div className="nav-links">
                        <Link to='/'>
                            <i className="fa fa-home home"></i>
                        </Link>
                    </div>
                </nav>
                <br/><br/>
                <div className="container">
                    <div className="card mb-3">
                    <div className="row no-gutters">
                        <div>
                            {this.state.pokemons.map(pokemon => (
                                <img className="item-img" src={pokemon.img} alt=""/>
                            ))}
                        </div>
                        <div>
                            <div className="card-body">
                                {this.state.pokemons.map(pokemon => (
                                    <div>
                                        <h2 className="card-title">{pokemon.name}</h2>
                                        <p className="card-text">
                                            <span className="desc">Type:</span> {pokemon.type.map(type => (`${type}, `))} <br/>
                                            <span className="desc">Numero:</span> {pokemon.num} <br/>
                                            <span className="desc">Height:</span> {pokemon.height} <br/>
                                            <span className="desc">Weight:</span> {pokemon.weight} <br/>
                                            <span className="desc">Weaknesses:</span> {pokemon.weaknesses.map(weaknesse => (`${weaknesse}, `))}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About