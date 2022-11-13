class MainApi {
    constructor (config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers
    }

    _checkResponse (res) {
        if (res.ok) {
            return res.json()
        } else return Promise.reject(`Ошибка: ${res.status}`)
    }

    register (name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(name, email, password)
        })
          .then(this._checkResponse)
    }

    authorize (email, password)  {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email, password)
        })
        .then(this._checkResponse)
    }

    signOut () {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(this._checkResponse)
    }
}

const MainApiConfig = {
    // baseUrl: 'https://api.roman.diploma.nomoredomains.icu',
    baseUrl: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
  }
  
export const mainApi = new MainApi(MainApiConfig);