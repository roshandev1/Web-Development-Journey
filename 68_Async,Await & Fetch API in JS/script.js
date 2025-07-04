async function getData() {
  //Simulate getting data from a server.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(143);
    }, 3500);
  });
}

async function getData() {
    //simulate getting data from a server.
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1"); //fetching API (We also have PUT, POST and DELETE.)

  let data = await x.json(); //parsing data to JSON, can also parse to text using ".text()".

  console.log(data);
}

async function main() {
  console.log("Loading modules...");
  console.log("Loading Data...");

  let data = await getData(); //await- waits till promise is resolved. await is always inside async function.

  console.log(data);

  console.log("Processing data...");

  console.log("Task 2 started.");
}

main();
