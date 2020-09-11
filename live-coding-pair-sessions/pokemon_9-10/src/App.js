import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
  Box
} from "@material-ui/core/";

// const useStyles = makeStyles(() => ({}));

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const ListPokemon = () => {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [currPokemon, setCurrPokemon] = useState();
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => { fetchAllPokemon(); });

  const handleOpen = (name) => {
    P.getPokemonByName(name).then((res) => setCurrPokemon(res));
    console.log(currPokemon);
    setOpen(true);
    console.log(open)
  }

  const handleClose = () => {
    setOpen(false);
    console.log(open)
  }

  const fetchAllPokemon = () =>
    P.getPokemonsList({ limit: 151}).then(function (response) {
      setPokeList(response.results);
    });

  const PokemonDialog = () => {
    if (currPokemon) {
      let sprite = currPokemon.sprites.front_default
      let name = currPokemon.name
      let hp = currPokemon.stats[0].base_stat
      let def = currPokemon.stats[2].base_stat
      let atk = currPokemon.stats[1].base_stat
      let spd = currPokemon.stats[5].base_stat
      let type = currPokemon.types[0].type.name
      let wt = currPokemon.weight
      return (
        <>
          <img src={sprite} /><DialogTitle>{name}</DialogTitle>
          <List>
              <ListItem><Typography>HP: {hp}</Typography></ListItem>
              <ListItem><Typography>Defense: {def}</Typography></ListItem>
              <ListItem><Typography>Attack: {atk}</Typography></ListItem>
              <ListItem><Typography>Speed: {spd}</Typography></ListItem>
              <ListItem><Typography>Type: {type}</Typography></ListItem>
              <ListItem><Typography>Weight: {wt}</Typography></ListItem>
          </List>
        </>
      )
    } else {
      return <DialogTitle>{'steve'}</DialogTitle>
    }
  }

  return (
    <>
      <List>
        {pokeList.slice(offset, offset + 5).map((pokemon, index) => (
          <ListItem key={pokemon.name}>
            <Button variant='outlined' fullWidth onClick={() => handleOpen(pokemon.name)}>
              <Box flexGrow={1}><Typography align='left'>{pokemon.name}</Typography></Box>
              <Box><Typography>{(index + 1 + offset).toString().padStart(3, 0)}</Typography></Box>
            </Button>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" onClick={() => setOffset(offset > 0 ? offset - 5 : offset)}>Prev</Button>
      <Button variant="outlined" onClick={() => setOffset(offset < 150 ? offset + 5 : offset)}>Next</Button>
      
      <Dialog onClose={handleClose} open={open}>
        <PokemonDialog />
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default function App() {
  // const classes = useStyles();
  return (
    <>
      <Container maxWidth='sm'>
        <ListPokemon />
      </Container>
    </>
  );
}
