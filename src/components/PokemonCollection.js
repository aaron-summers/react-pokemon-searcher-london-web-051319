import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const {pokemons} = this.props
    return (
      <div className="ui container center aligned">
      <Card.Group style={{width: '80rem'}} itemsPerRow={5}>
        {pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)}
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
