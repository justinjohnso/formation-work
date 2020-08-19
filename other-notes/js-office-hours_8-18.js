// map, filter, find, some, reduce

const arr = [1, 2, 3, 4, 5, 6];
const add = (accumulator, currentValue) => {
  console.log(`add() called. accumulator: ${accumulator}, currentValue: ${currentValue}`);
  
  return accumulator + currentValue;
};

console.log('reduce([1, 2, 3, 4, 5])', [1, 2, 3, 4, 5].reduce(add));

// https://alligator.io/js/finally-understand-reduce/

// ----------------------------------------

// wait `ms` milliseconds
function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  
  async function doStuff() {
    connectToDatabase()
      .then(loadSeeks)
      .then(startWebsocketServer)
      .then(prepareSomeOtherStuff)
      .then(() => {
        console.log('server ready');
      });
  }
  
  async function doStuff() {
    await connectToDatabase();
    await loadSeeks();
    await startWebsocketServer();
    // ...
  }
  
  async function doStuff() {
    const user = await User.loadByID(userID);
    const game = await Game.loadByID(gameID);
    
    const [user, game] = await Promise.all([
      User.loadByID(userID),
      Game.loadByID(gameID)
    ]);
  }
  
  // map, filter, etc
  // data manipulation hw
  // promises
  // event loop