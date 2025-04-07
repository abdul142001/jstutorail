function callBackFunction(name, callback) {
    console.log("Hello, " + name);
    callback();
  }
  
  function sayBye() {
    console.log("Goodbye!");
  }
  
  callBackFunction("Alice", sayBye);
  