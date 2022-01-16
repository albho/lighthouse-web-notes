# Terminology
Reference: https://developer.mozilla.org/en-US

### Callback Function
- a callback function is a function passed into another function as an argument, which is then invoked

### Closures
- a closure is the combination of a function enclosed with references to its surrounding state (the lexical environment)
- closures give a function access to its surrounding environment
- every closure has 3 scopes: local scope, out function scope, global scope

### First Class Functions
- functions in JS are considered first class citizens - simply meaning that they can be assigned to variables, passed around as arguments, and returned by other functions

### Higher Order Function
- a function that takes a function as an argument, or returns a function
- e.g. forEach, filter, sort

### Literal
- a literal is any notation for **representing** a value within source code
- e.g. object literal, string literal
- e.g. {}, [], 'some string', 5

### Side Effects
- a function, expression, or operation has a **side effect** if it modifies some *state* variable outside its local environment i.e. has an effect besides returing a value (the primary effect) to the invoker