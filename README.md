# angular-router-sane

Makes reading typed parameters from an activated route sane. This means that the returned value will always be guaranteed to be of the expected type. Numbers will always be numbers and strings will always be strings. Disclaimer: `NaN`is not a legit number for the sake of sanity.

## Installation

Run `npm install angular-router-sane`.

## Usage

 - In a component, `import { Sane } from 'angular-router-sane'`.
 - During construction, tell `Sane` which route to use:
```
  constructor(
    route: ActivatedRoute,
    private sane: Sane
  ) {
    this.sane.route(route);
  } 
```
 - Now you can use `const id: number = this.sane.number('parameter');` with confidence that `id` will always be a number.
 
## functions

### route()

`route(route: ActivatedRoute): void`
`setActivatedRoute(route: ActivatedRoute): void`

Tell `Sane` which route to parse for parameters. Unfortunately, each component can have its own routing. Therefore this must be done once per component.

### has()

`has(name:string): boolean`
`hasBeenSet(name:string): boolean`

A parameter with the given name is present and has been set to any other value than ''

### number()

`number(name:string): number`
`getNumber(name:string): number`

Any parameter with the given name is sanitized into a number, `0` if not recognizable as number. Disclaimer: `NaN` is returned as `0` because it is too hard to distinguish between `isNaN(\'x\')` and `isNaN(NaN)`.

### boolean()

`boolean(name:string): boolean`
`getBoolean(name:string): boolean`

Any parameter with the given name is sanitized into a boolean. The only string sanitized to `false` is `'false'`. `[]` and `{}` are sanitized to `false`;

### string()

`string(name:string): string`
`getString(name:string): string`

Any parameter with the given name is sanitized into a string.

### json()

`json(name:string): any`
`getJson(name:string): any`

Any parameter with the given name is sanitized into a string.

### Long form functions

If you're having trouble syntax checking `this.sane.string()` because `string` is already a reserved word, try the long form aliases, e. g. `this.sane.getString()`. 

