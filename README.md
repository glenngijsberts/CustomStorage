# CustomStorage

Easy to use wrapper for [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) 🧠.

## Install

```shell
# Install
npm install @glenngijsberts/customstorage --save
```

```javascript
import CustomStorage from '@glenngijsberts/customstorage'
```

## Usage

```javascript
/*
    get item
*/
const token = CustomStorage.get('token')

/*
    set: token, value, cachetime
*/
const token = 'AABB12'
CustomStorage.set('token', token, 60)

/*
    remove item
*/
CustomStorage.remove('token')

/*
    clear storage (all items)
*/
CustomStorage.clear()
```

## Clone

```shell
# clone the repo
git clone https://github.com/glenngijsberts/CustomStorage.git

# install dependencies / or npm install
yarn

# tests / or npm run test
yarn test

# build / or npm run prepare
yarn prepare
```

## Contribution

Feel free to contribute to this package. If you have any questions you can reach out to me on [twitter](https://twitter.com/glenngijsberts) 😄 This package is inspired by this [vue tabs package](https://github.com/spatie/vue-tabs-component) from the guys at [spatie](https://github.com/spatie).

## License

MIT
