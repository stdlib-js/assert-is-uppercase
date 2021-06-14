<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isUppercase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is an uppercase string.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-uppercase
```

</section>

<section class="usage">

## Usage

```javascript
var isUppercase = require( '@stdlib/assert-is-uppercase' );
```

#### isUppercase( value )

Tests if a `value` is an uppercase `string`.

```javascript
var bool = isUppercase( 'HELLO' );
// returns true

bool = isUppercase( 'salt and light' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function validates that a `value` is a `string`. For all other types, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isUppercase = require( '@stdlib/assert-is-uppercase' );

var bool = isUppercase( 'HELLO' );
// returns true

bool = isUppercase( '' );
// returns false

bool = isUppercase( 'Hello' );
// returns false

bool = isUppercase( 'hello' );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/assert-is-uppercase
```

</section>

<section class="usage">

### Usage

```text
Usage: is-uppercase [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-uppercase BEEP
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'boop' | is-uppercase
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-uppercase.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-uppercase

[test-image]: https://github.com/stdlib-js/assert-is-uppercase/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-uppercase/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-uppercase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-uppercase?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-uppercase
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-uppercase/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-uppercase/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
