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

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Gamma][gamma-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [gamma][gamma-distribution] random variable is

<!-- <equation class="equation" label="eq:gamma_pdf" align="center" raw="f(x;\alpha,\beta)=\frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha \,-\, 1} e^{- \beta x }" alt="Probability density function (PDF) for a Gamma distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\alpha,\beta)=\frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha \,-\, 1} e^{- \beta x }" data-equation="eq:gamma_pdf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/gamma/pdf/docs/img/equation_gamma_pdf.svg" alt="Probability density function (PDF) for a Gamma distribution.">
    <br>
</div>

<!-- </equation> -->

where `α > 0` is the shape parameter and `β > 0` is the rate parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-gamma-pdf
```

</section>

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats-base-dists-gamma-pdf' );
```

#### pdf( x, alpha, beta )

Evaluates the [probability density function][pdf] (PDF) for a [gamma][gamma-distribution]  distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = pdf( 2.0, 0.5, 1.0 );
// returns ~0.054

y = pdf( 0.1, 1.0, 1.0 );
// returns ~0.905

y = pdf( -1.0, 4.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -0.5, 1.0 );
// returns NaN
```

If provided `alpha = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = pdf( 2.0, 0.0, 2.0 );
// returns 0.0

y = pdf( 0.0, 0.0, 2.0 );
// returns Infinity
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 1.0, 0.0 );
// returns NaN

y = pdf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### pdf.factory( alpha, beta )

Returns a `function` for evaluating the [PDF][pdf] of a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mypdf = pdf.factory( 3.0, 1.5 );

var y = mypdf( 1.0 );
// returns ~0.377

y = mypdf( 4.0 );
// returns ~0.067
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var pdf = require( '@stdlib/stats-base-dists-gamma-pdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 3.0;
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = pdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, f(x;α,β): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


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

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gamma-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gamma-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-gamma-pdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-gamma-pdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gamma-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gamma-pdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gamma-pdf
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gamma-pdf/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gamma-pdf/main/LICENSE

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->