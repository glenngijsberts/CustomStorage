class CustomStorage {
    get(key) {
        const cached = JSON.parse(localStorage.getItem(key));

        if (!cached) {
            return null;
        }

        const expires = new Date(cached.expires);

        if (expires < new Date()) {
            localStorage.removeItem(key);
            return null;
        }

        return cached.value;
    }

    set(key, value, timeInMinutes) {
        const currentTime = new Date().getTime();

        const expires = new Date(currentTime + timeInMinutes * 60000);

        localStorage.setItem(key, JSON.stringify({ value, expires }));
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}

export default new CustomStorage();