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

// const useStyles = makeStyles((theme) => ({}));

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
    return (
      <>
        <Dialog onClose={handleClose} open={open}>
          {/* <DialogTitle>{currPokemon.name}</DialogTitle> */}
          {/* <List>
            <ListItem>
              <Typography>HP:{}</Typography>
              <Typography>Defense:{}</Typography>
              <Typography>Attack:{}</Typography>
              <Typography>Speed:{}</Typography>
              <Typography>Type:{}</Typography>
              <Typography>Weight:{}</Typography>
            </ListItem>
          </List> */}
          <DialogActions>
           <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  return (
    <>
      <List>
        {pokeList.slice(offset, offset + 5).map((pokemon, index) => (
          <ListItem key={pokemon.name}>
            <Box fullWidth onClick={() => handleOpen(pokemon.name)}>
              <Box flexGrow={1}><Typography align='left'>{pokemon.name}</Typography></Box>
              <Box><Typography>{(index + 1 + offset).toString().padStart(3, 0)}</Typography></Box>
            </Box>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" onClick={() => setOffset(offset > 0 ? offset - 5 : offset)}>Prev</Button>
      <Button variant="outlined" onClick={() => setOffset(offset < 150 ? offset + 5 : offset)}>Next</Button>
      <PokemonDialog />
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
