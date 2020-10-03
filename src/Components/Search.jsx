import React from 'react'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    state = {
        pokemons: {},
        pokemonFind: {},
        input: ''
    }

    componentWillMount() {
        this.setState({ pokemons: this.props.pokemons })
        this.setState({ pokemonFind: [] })
    }

    handleChange = e => {
        //sauvegarde la valeur de l'input dans le state
        this.setState({ input: e.currentTarget.value })

        let pokemonFind = this.findPokemon(this.state.input, this.state.pokemons)
        
        if (pokemonFind && e.currentTarget.value !== "") {
            this.setState({ pokemonFind })
        } else {
            this.setState({ pokemonFind: [] })
        }
    }

    findPokemon = (input, pokemons) => {
        return pokemons.filter(pokemon => {
            const regex = new RegExp(input, 'gi')
            return pokemon.name.match(regex) || pokemon.type.find(type => type.match(regex))
        })
    }

    render() {
        return (
            <form className="searchBar">
                <h1 className="search-title">Pokédex</h1>
                <div className="search-bar-outer" >
                    <input type="text" placeholder="Rechercher" className="search-bar" onChange={ this.handleChange }/>
                </div>
                <ul>
                    {this.state.pokemonFind.map(poke => (
                        <Link to={ poke.num } className="item-outer">
                            <li className="item-res search-result" key={poke.num}>{poke.name}</li>
                        </Link>
                    ))}
                </ul>
            </form>
        )
    }
}

export default Search