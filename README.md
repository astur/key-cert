# key-cert

Zero-config generator of self-signed private key and certificate.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i key-cert
```

## Usage

Returns promise of a `{key, cert}` object ready to use in development and testing. That's all.

```js
const keyCert = require('key-cert');

(async () => {
    require('https').createServer(await keyCert(), (request, response) => {
        response.end('ok');
    }).listen(443);
})()

```

## License

MIT

[npm-url]: https://npmjs.org/package/key-cert
[npm-image]: https://badge.fury.io/js/key-cert.svg
[travis-url]: https://travis-ci.org/astur/key-cert
[travis-image]: https://travis-ci.org/astur/key-cert.svg?branch=master