// import React, { useEffect,useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import { POKEMON_API_URL } from '../config';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Image, ProgressBar} from 'react-bootstrap';
// import classes from './PokemonDetails.module.css'


// const PokemonDetails = () => {
//     const params = useParams()
//     const pokeID = params.id
//     const [pokemonUI, setPokemonUI] = useState({})

//     // useEffect(() => {
//     //     axios.get(POKEMON_API_URL + "/" + pokeID).then((response) => {
//     //         if (response.status >= 200 && response.status < 300) {
//     //           console.log(response.data)
              
//     //         }
//     //       })
        
//     // },[pokeID])
//     useEffect(()=> {
//         // const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/2/`;
//         const aaaaa = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`
//         axios.get(aaaaa).then((response) => {
//                     if (response.status >= 200 && response.status < 300) {
//                         // const height = response.data.height
//                         // const weight = response.data.weight
                        
//                         setPokemonUI({ pokemon: response.data })
//                     }
                    
//                   })
               
//     },[pokeID])
//         // const { order, height } = pokemonUI                     

//     console.log(pokemonUI.pokemon.order)

    
//     return (
//         <div style={{marginTop:"70px",color:"#fff"}}>
//             <Container className={classes.main} style={{backgroundColor:"#fff",width:"80%",borderRadius:"0.3rem"}}>
                
//                 <Row>
//                     <div className={classes.topGrey}>
//                        <span>HI</span>
//                        <span>BYE</span>
//                     </div>
//                 </Row>
//                 <Row>
//                     <Col>
//                     <Image className={classes.imgs} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" fluid />
//                     </Col>
//                     <Col xs={8} className={classes.top_info}>  
//                     <h4>Charizard</h4>

//                     <div className={classes.flexBox}>
//                         <span>HP</span>
//                         <span className={classes.rightCol}>
//                             <ProgressBar variant="danger" now={80} label={"60%"}/>
//                         </span>
//                     </div>
//                     <div className={classes.flexBox}>
//                         <span>Attack</span>
//                         <span className={classes.rightCol}>
//                             <ProgressBar variant="danger" now={80} label={"60%"}/>
//                         </span>
//                     </div>
//                     <div className={classes.flexBox}>
//                     <span>Defence</span>
//                         <span className={classes.rightCol}>
//                             <ProgressBar variant="danger" now={80} label={"60%"}/>
//                         </span>
//                     </div>
//                     <div className={classes.flexBox}>
//                     <span>Speed</span>
//                         <span className={classes.rightCol}>
//                             <ProgressBar variant="danger" now={80} label={"60%"}/>
//                         </span>
//                     </div>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col style={{color:"#222",padding:"20px",fontSize:"14px",textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim qui, iure doloremque eveniet repudiandae suscipit tempora similique ullam expedita.</Col>
//                 </Row>
//                 <hr />
//              <div className={classes.bottom_info}>
//                 <Row>
//                     <h5>Profile</h5>
//                     <Col style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
//                         <div className={classes.bottomLeft}>
//                           <div className={classes.bottomLeftLeft}>
//                             <span>Height:</span>
//                             <span>Weight:</span>
//                           </div>
//                           <div className={classes.bottomLeftRight}>
//                             {/* <span>{height}</span> */}
//                             {/* <span>{weight}</span> */}
//                           </div>
//                         </div>
//                         <div className={classes.bottomRight}>
//                           <div className={classes.bottomLeftLeft}>
//                             <span>Abilities:</span>
//                             <span>Catch Rate:</span>
//                           </div>
//                           <div className={classes.bottomLeftRight}>
//                             <span>Something</span>
//                             <span>22%</span>
//                           </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </div>
//             <Row>
//                     <div style={{borderRadius:"0 0 0.3rem 0.3rem",boxShadow:"0px -1px 1px 0px rgba(0,0,0,0.19)"}} className={classes.topGrey}>
//                        <span>Data from PokeAPI.co</span>
//                     </div>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default PokemonDetails;