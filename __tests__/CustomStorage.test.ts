import CustomStorage from '../__mocks__/CustomStorageMock'

describe('CustomStorage', () => {
  test('CustomStorage can set & get a key with value', () => {
    CustomStorage.set('Football', 'is great', 60)

    const value = CustomStorage.get('Football')
    expect(value).toBe('is great')
  })

  test('CustomStorage can remove a key', () => {
    CustomStorage.remove('Football')

    const emptyValue = CustomStorage.get('Football')
    expect(emptyValue).toBeNull()
  })

  test('CustomStorage can clear the storage', () => {
    CustomStorage.set('Football', 'is still great', 60)
    CustomStorage.set('Baseball', 'is also great', 60)

    const football = CustomStorage.get('Football')
    expect(football).toBe('is still great')

    const baseball = CustomStorage.get('Baseball')
    expect(baseball).toBe('is also great')

    CustomStorage.clear()

    const emptyValue = CustomStorage.get('Baseball')
    expect(emptyValue).toBeNull()
  })
})
