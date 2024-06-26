console.log("tofee");
console.log("biscuit");
console.log("cheese");
console.log("cake");
console.log("wade");
console.log("roti");

  fetch("https:fakestoreapi.com/products/1").then(()=>{
    console.log("fetched food");
})

      setTimeout(()=>{
    for(let i=0;i<5;i++){
        console.log("rice "+i);
    }
      },100)


console.log("bun");



// Fetch API: The fetch function initiates an asynchronous request to the provided URL. When the promise is resolved, the then block is executed, logging "Fetched food".



// setTimeout: The setTimeout function schedules the execution of the provided function after a 100-millisecond delay. Inside this function, a for loop logs "rice" followed by the index value five times.


// Synchronous Log: The console.log("bun") statement is executed immediately because it is not inside any asynchronous function.


