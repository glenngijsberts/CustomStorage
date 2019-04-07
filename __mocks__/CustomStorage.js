/*
    The localStorage API is mocked
    by initializing a store object in the constructor
*/
class CustomStorageMock {
    constructor() {
      this.store = {};
    }

    get(key) {
        let cached;

        if (this.store[key]) {
            cached = JSON.parse(this.store[key]);
        } else {
            return null;
        }

        if (!cached) {
            return null;
        }

        const expires = new Date(cached.expires);

        if (expires < new Date()) {
            this.remove(key);
            return null;
        }

        return cached.value;
    }

    set(key, value, timeInMinutes) {
        const currentTime = new Date().getTime();

        const expires = new Date(currentTime + timeInMinutes * 60000);

        this.store[key] = JSON.stringify({ value, expires });
    }

    remove(key) {
        delete this.store[key];
    }

    clear() {
        this.store = {};
    }
}

export default new CustomStorageMock();