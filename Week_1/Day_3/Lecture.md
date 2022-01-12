### Data Types in JS
- Primitives: Number, BigInt, String, Boolean, Null, Undefined, Symbol
- Objects: everything else, notably Arrays & Functions
- quirks:
  - Symbols are *always* unique
  - NaN is of Number type
  - BigInt has no capacity size (only limited by computer RAM). When operating with BigInt, other variables must also be BigInt

### Objects
- convention for accessing values using dot vs. bracket notation
  - bracket: will always work but only necessary when it is uncertain whether a key exists
  - dot: faster method available for when a key is known to exist

### Passing Primitives vs. Objects to functions
- Primitives
  - immutable (when changing value, you are re-assigning a value, not changing it)
  - are passed via **value**
- Objects
  - mutable
  - are passed via **reference**
- functions cannot mutate primitive values outside of its scope, whereas objects can be mutated (so, you must be careful!)

### Methods
- calling a function *inside* of an object stores the function's return value within the corresponding key (as a **property**, not a **method**)
- defining a function inside of an object (to be called *outside* of the function) stores the function as a **method** within the object