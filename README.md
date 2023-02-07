# @valtech-commerce/joi

[![npm](https://img.shields.io/npm/v/@valtech-commerce/joi.svg)](https://www.npmjs.com/package/@valtech-commerce/joi)
[![npm dependencies](https://david-dm.org/valtech-commerce/joi/status.svg)](https://david-dm.org/valtech-commerce/joi)
[![npms](https://badges.npms.io/%40valtech-commerce%2Fjoi.svg)](https://npms.io/search?q=%40valtech-commerce%2Fjoi)
[![Travis CI](https://travis-ci.com/valtech-commerce/joi.svg?branch=master)](https://travis-ci.com/valtech-commerce/joi/builds)

> joi extensions + extra goodies


## Install

```bash
$ npm install @valtech-commerce/joi
```


## Usage

```js
import { Joi, validateArgument } from '@valtech-commerce/joi';

class MyClass () {

	constructor(path, value) {
		validateArgument('path',  path,  Joi.absolutePath().required());
		validateArgument('value', value, Joi.number().required());

		// Do your stuff
	}

}
```



## Extensions

### absolutePath
Validate that the value is an absolute *nix or Windows path.

### joiSchema
Validate that the value is a joi schema.

### kebabCase
Validate that the value is kebab-case.

### variableName
Validate that the value is a JavaScript valid variable name via [is-var-name](https://github.com/shinnn/is-var-name).



## Documentation

View [documentation](https://valtech-commerce.github.io/joi)






<br><br>

## License

MIT © [Valtech Canada inc.](https://www.valtech.ca/)
