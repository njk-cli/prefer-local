# prefer-local

![Build Status](![ci](https://github.com/mohitsinghs/prefer-local/workflows/ci/badge.svg)
[![npm](https://badge.fury.io/js/prefer-local.svg)](http://badge.fury.io/js/prefer-local)
[![codecov](https://codecov.io/gh/mohitsinghs/prefer-local/branch/master/graph/badge.svg)](https://codecov.io/gh/mohitsinghs/prefer-local)
[![dependencies Status](https://david-dm.org/mohitsinghs/prefer-local/status.svg)](https://david-dm.org/mohitsinghs/prefer-local)
[![devDependencies Status](https://david-dm.org/mohitsinghs/prefer-local/dev-status.svg)](https://david-dm.org/mohitsinghs/prefer-local?type=dev)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mohitsinghs/prefer-local/blob/master/LICENSE)

## Install

Install with [npm](https://npm.im/prefer-local)

```bash
npm install prefer-local
// or
yarn add prefer-local
```

## Uses

Useful for places where we need to choose between boolean value of a property inside an object (if exists) and another boolean value and prefer inner property. For Example, while choosing between local option in an object and a global option. If local option is set to `false` returns `false` even if global option is true.

- `src` - source object containing inner property
- `key` - key of the inner property
- `prop` - value of global property
