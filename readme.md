# @absolunet/joi

[![npm](https://img.shields.io/npm/v/@absolunet/joi.svg)](https://www.npmjs.com/package/@absolunet/joi)
[![npm dependencies](https://david-dm.org/absolunet/node-joi/status.svg)](https://david-dm.org/absolunet/node-joi)
[![npms](https://badges.npms.io/%40absolunet%2Fjoi.svg)](https://npms.io/search?q=%40absolunet%2Fjoi)
[![Travis CI](https://travis-ci.com/absolunet/node-joi.svg?branch=master)](https://travis-ci.com/absolunet/node-joi/builds)

> joi extensions + extra goodies


## Install

```bash
$ npm install @absolunet/joi
```


## Usage

```js
import { Joi, validateArgument } from '@absolunet/joi';

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

View [documentation](https://documentation.absolunet.com/node-joi)






<br><br>

## License

MIT © [Absolunet](https://absolunet.com)
