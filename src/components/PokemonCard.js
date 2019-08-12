import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    toggle: true
  }

  toggleCard = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const hp = this.props.stats.find(stat => stat.name === 'hp')
    const attack = this.props.stats.find(stat => stat.name === 'attack')
    const defense = this.props.stats.find(stat => stat.name === 'defense')
    const speed = this.props.stats.find(stat => stat.name === 'speed')

    const {height, weight, name, abilities, types, sprites} = this.props
    return (
      <Card onClick={this.toggleCard}>
        <div>
          <div className="image">
            <img src={this.state.toggle ? sprites.front : sprites.back} alt="oh no!" />
          </div>
          <Card.Content>
          <Card.Header>{name.toUpperCase()}</Card.Header>

          <div className="extra content">
            <div>
              <i className="medkit icon green" />
                {hp.value}
            </div>
            <div>
              <i className="bomb icon red"> </i>
              {attack.value}
            </div>
            <div>
            <i className="shield alternate icon blue"></i>
              {defense.value}
            </div>
          </div>
        </Card.Content>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
