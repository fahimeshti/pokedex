import axios from 'axios';
import React, { Component } from 'react';
import { POKEMON_API_URL } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, ProgressBar} from 'react-bootstrap';
import classes from './PokemonDetails.module.css'
import AmazonLoader from './Loader';

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };

class PokemonDetailClass extends Component {
    
    constructor(props){
        super()
        this.state = {
            pokemon: null,
            OtherInfo: null
        }
    }
   async componentDidMount() {
        const { match } = this.props
        const { id } = match?.params
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
        await axios.get(POKEMON_API_URL + "/" + id)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                this.setState({pokemon: response.data})
            }
        })

        axios.get(pokemonSpeciesUrl).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                this.setState({OtherInfo: response.data})
               
            }
            
          })
}

render() {
        const { pokemon, OtherInfo } = this.state
        if (pokemon && OtherInfo) {
            const {name, sprites, height, weight, abilities, stats, id, types} = pokemon
            const {capture_rate, flavor_text_entries} = OtherInfo

            const Types = types.map(type => {
                return type.type.name
            })

            const Height = Math.round((height * 0.328084 + 0.00001) * 100) / 100;
            const Weight = Math.round((weight * 0.220462 + 0.00001) * 100) / 100;
            const Abilities = abilities.map(abiliti => {
                return abiliti.ability.name
            }).join(', ');

            let { hp, attack, defense, speed } = '';
            stats.forEach(stat => {
                switch (stat.stat.name) {
                  case 'hp':
                    hp = stat['base_stat'];
                    break;
                  case 'attack':
                    attack = stat['base_stat'];
                    break;
                  case 'defense':
                    defense = stat['base_stat'];
                    break;
                  case 'speed':
                    speed = stat['base_stat'];
                    break;
                  default:
                    break;
                }
              });

              // Get Description
    const description = flavor_text_entries[0].flavor_text

        return (
<div style={{marginTop:"70px",color:"#fff"}}>
<Container className={classes.main} style={{backgroundColor:"#fff",width:"80%",borderRadius:"0.3rem"}}>
    <Row>
        <div className={classes.topGrey}>
            <span style={{fontWeight:"bold",color:"#555"}}>#{id}</span>
            <div className={classes.poke_types}>{Types.map(type=>
            <span key={type} style={{backgroundColor: `#${TYPE_COLORS[type]}`,color: 'white'}}>
                {type}
            </span>
            )}</div>
        </div>
    </Row>
    <Row>
        <Col>
        <Image className={classes.imgs} src={sprites.front_default} fluid />
        </Col>
        <Col xs={7} className={classes.top_info}>  
        <h4>{name}</h4>

        <div className={classes.flexBox}>
            <span>HP</span>
            <span className={classes.rightCol}>
                <ProgressBar variant="danger" now={hp} label={`${hp}%`}/>
            </span>
        </div>
        <div className={classes.flexBox}>
            <span>Attack</span>
            <span className={classes.rightCol}>
                <ProgressBar variant="danger" now={attack} label={`${attack}%`}/>
            </span>
        </div>
        <div className={classes.flexBox}>
        <span>Defence</span>
            <span className={classes.rightCol}>
                <ProgressBar variant="danger" now={defense} label={`${defense}%`}/>
            </span>
        </div>
        <div className={classes.flexBox}>
        <span>Speed</span>
            <span className={classes.rightCol}>
                <ProgressBar variant="danger" now={speed} label={`${speed}%`}/>
            </span>
        </div>
        </Col>
    </Row>
    <Row>
        <Col style={{color:"#222",padding:"20px",fontSize:"14px",textAlign:"center"}}>
            <p>{description}</p>
        </Col>
    </Row>
    <hr />
    <div className={classes.bottom_info}>
    <Row>
        <h5>Profile</h5>
        <Col className={classes.bottom_info_data} style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <div className={classes.bottomLeft}>
                <div className={classes.bottomLeftLeft}>
                <span>Height:</span>
                <span>Weight:</span>
                </div>
                <div className={classes.bottomLeftRight}>
                <span>{Height} Feet</span>
                <span>{Weight} Kg</span>
                </div>
            </div>
            <div className={classes.bottomRight}>
                <div className={classes.bottomLeftLeft}>
                <span>Abilities:</span>
                <span>Catch Rate:</span>
                </div>
                <div className={classes.bottomLeftRight}>
                <span>{Abilities}</span>
                <span>{capture_rate}%</span>
                </div>
            </div>
        </Col>
    </Row>
</div>
<Row>
    <div style={{fontSize:"15px",borderRadius:"0 0 0.3rem 0.3rem",boxShadow:"0px -1px 1px 0px rgba(0,0,0,0.19)"}} className={classes.topGrey}>
        <span>Data from <a href="https://pokeapi.co/">PokeAPI.co</a></span>
    </div>
</Row>
</Container>
</div>
        )
    } else {
        return <AmazonLoader />
    }

}
}

export default PokemonDetailClass;