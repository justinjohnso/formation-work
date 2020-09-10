import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Container, Button } from "@material-ui/core/";
// import Pokedex from "pokeapi-js-wrapper"

const useStyles = makeStyles((theme) => ({}));

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const ListPokemon = () => {
  const [offset, setOffset] = useState(0);
  const [currPokemon, setCurrPokemon] = useState();
  const [pokeList, setPokeList] = useState([
    { name: "charmander" },
    { name: "pikachu" },
    { name: "squirtle" }
  ]);

  useEffect(() => {
    fetchAllPokemon();
  });

  const fetchAllPokemon = () =>
    P.getPokemonsList({ limit: 5, offset }).then(function (response) {
      setPokeList(response.results);
    });

  const handleClick = (name) => {
    P.getPokemonByName(name).then((res) => setCurrPokemon(res));
  };

  return (
    <>
      <List>
        {pokeList.map((pokemon) => (
          <ListItem key={pokemon.name}>
            <Button onClick={() => handleClick(pokemon.name)}>
              {pokemon.name}
            </Button>
          </ListItem>
        ))}
      </List>
      <Button onClick={() => setOffset(offset > 0 ? offset - 5 : offset)}>
        Prev
      </Button>
      <Button onClick={() => setOffset(offset + 5)}>Next</Button>
      {/* <div>{currPokemon}</div> */}
    </>
  );
};

export default function App() {
  const classes = useStyles();
  return (
    <Container>
      <ListPokemon />
    </Container>
  );
}
