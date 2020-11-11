export interface StorageItemValue {
  expires: Date
  value: any
}

class CustomStorage {
  /*
      Get method. Will get an item from
      the localStorage by key. It will check for
      null and undefined, and if the item is expired.
      If not, it will return the value of the given key.
  */
  get(key: string) {
    const item: string | null | undefined = localStorage.getItem(key)

    if (typeof item === 'undefined' || item === null) {
      return null
    }

    const parsedItem: StorageItemValue = JSON.parse(item)

    if (!parsedItem) {
      return null
    }

    const expires = new Date(parsedItem.expires)

    if (expires < new Date()) {
      localStorage.removeItem(key)
      return null
    }

    return parsedItem.value
  }

  /*
      Set method. It will let you set an item
      with a key and value. It will also allow
      you to set a lifetime for the item (in minutes).
  */
  set(key: string, value: any, timeInMinutes: number) {
    const currentTime: number = new Date().getTime()

    const expires: Date = new Date(currentTime + timeInMinutes * 60000)

    localStorage.setItem(key, JSON.stringify({ value, expires }))
  }

  /*
      Remove method. Remove an item by
      key from localStorage.
  */
  remove(key: string) {
    localStorage.removeItem(key)
  }

  /*
      Clear method. Remove everything
      from your localStorage.
  */
  clear() {
    localStorage.clear()
  }
}

export default new CustomStorage()
