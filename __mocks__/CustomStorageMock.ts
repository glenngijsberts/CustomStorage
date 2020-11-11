import { StorageItemValue } from '../src'

/*
    The localStorage API is mocked
    by initializing a store object in the constructor
*/
class CustomStorageMock {
  store: any

  constructor() {
    this.store = {}
  }

  get(key: string) {
    let cached: StorageItemValue

    if (this.store[key]) {
      cached = JSON.parse(this.store[key])
    } else {
      return null
    }

    if (!cached) {
      return null
    }

    const expires: Date = new Date(cached.expires)

    if (expires < new Date()) {
      this.remove(key)
      return null
    }

    return cached.value
  }

  set(key: string, value: any, timeInMinutes: number) {
    const currentTime: number = new Date().getTime()

    const expires: Date = new Date(currentTime + timeInMinutes * 60000)

    this.store[key] = JSON.stringify({ value, expires })
  }

  remove(key: string) {
    delete this.store[key]
  }

  clear() {
    this.store = {}
  }
}

export default new CustomStorageMock()
