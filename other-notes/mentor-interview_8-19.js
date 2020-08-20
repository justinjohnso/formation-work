// this
// scheduling (event loop video)
// https://www.youtube.com/watch?v=8aGhZQkoFbQ to understand the event loop

// http://es6-features.org/#Constants

// Read about the behavior of "this" in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this and understand the behavior here: https://gist.github.com/matthewoates/2f902682330a7ce0d6a5dab42ee49b65

(function () {
    window.baz = undefined;

    var foo = {
        baz: 'baz',
        bar: function () {
            console.log(this.baz);
        }
    };

    var bar = foo.bar;
    var bar2 = foo.bar.bind(foo);

    foo.bar(); // baz
    foo['bar'](); // baz
    bar(); // undefined
    bar2(); // baz
    setTimeout(foo.bar, 0); // undefined
    setTimeout(foo.bar2, 0); // baz
}());

setTimeout(() => {
  this.counter += 1
}, 1)

class Stopwatch {
  constructor() {
    // this.counter = Date.now()
    // this.currVal = 0
    // this.cancelToken = null
    this.startTime = 0
    // this.pauseTime = 0
    this.currElapsed = 0
    this.running = false
  }
  start() {
    // this.cancelToken = setInterval(() => {
    //   this.counter += 10
    // }, 10);
    // this.currVal = Date.now()
    
    // save start time
    this.startTime = Date.now()
    this.running = true
  }
  pause() {
    // clearInterval(this.cancelToken)
    // this.currVal = Date.now() - this.currVal
    
    // save pause time
    // do math -> update currElapsed
    // pause - start = elapsed time
    this.currElapsed += Date.now() - this.startTime
    this.running = false

  }
  getElapsedTime() {
    let result = this.currElapsed
    
    if (this.running) {
      result += Date.now() - this.startTime
    }
    
    
    return result
  }
}

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}

async function test() {
  let test = new Stopwatch()
  test.start()
  
  await wait(500)
  test.pause()
  test.start()
  await wait(500)
  test.pause()
  console.log(test.getElapsedTime())
  console.log(test.getElapsedTime())
  console.log(test.getElapsedTime())
}

test()