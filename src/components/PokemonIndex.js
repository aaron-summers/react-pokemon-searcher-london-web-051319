import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import API from '../adapters/API'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ''
  }

  componentDidMount() {
    API.fetchPokemon().then(pokemons => this.setState({ pokemons }))
    // console.log(this.state.pokemons)
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value})
  }

  filteredPokemon = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
  }

  addPokemon = (newPokemon) => {
    // API.addPokemon(newPokemon)
    API.postPokemon(newPokemon)
      .then(pokemon => this.setState({pokemons: [...this.state.pokemons, pokemon]}))
  }

  render() {
    this.filteredPokemon()
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <PokemonForm onSubmit={this.addPokemon}/>
        <br />
        <Search onSearchChange={this.handleChange} showNoResults={false} />
        {/* <Sort /> */}
        <br />
        <PokemonCollection pokemons={this.filteredPokemon()}/>
        <br />
      </div>
    )
  }
}

export default PokemonPage
