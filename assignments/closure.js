// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function thanks() {
  const a = "friend";
  console.log(`Thanks ${a}!`);
  // debugger;

  function reply() {
    const b = "buddy";
    console.log(`I'm not your  ${a}, ${b}.`)
    // debugger;

    function smarty() {
      const c = "pal";
      console.log(`I'm not your ${b}. ${c}.`);
      // debugger;

      function okkk() {
        const d = "guy";
        console.log(`I'm not your ${c}, ${d}.`);
        // debugger;
      }

      okkk();
    }

    smarty();
  }

  reply();
}

thanks();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (i = 0) => any = () => {
  // Return a function that when invoked increments and returns a counter variable.
  i++;
  return console.log(i);
};
const newCounter = counter();
newCounter();
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (i = 0) => any = {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  increment: () => {
    i++;
    return console.log(i);
  },
  decrement: () => {
    i--;
    return console.log(i);
  }
};
const moreorless = counterFactory();
moreorless.increment();
moreorless.increment();
moreorless.decrement();
moreorless.increment();
