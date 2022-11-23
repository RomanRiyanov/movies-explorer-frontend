class MainApi {
    constructor (config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
        this._moviesUrl = config.moviesUrl;
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
            headers: this._headers,
            body: JSON.stringify(name, email, password)
        })
          .then(this._checkResponse)
    }

    authorize (email, password)  {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify(email, password)
        })
        .then(this._checkResponse)
    }

    signOut () {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }

    getUserInfo () {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }

    updateUserInfo (name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include', 
            headers: this._headers,
            body: JSON.stringify({name: name, email: email})
        })
        .then(this._checkResponse)
    }

    getMovies () {
        return fetch(`${this._baseUrl}/movies`, {
                method: 'GET',
                credentials: 'include',
                headers: this._headers
            })
            .then(this._checkResponse)
    }

    createMovie (movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: 'include', 
            headers: this._headers,
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `${this._moviesUrl}${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `${this._moviesUrl}${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,    
            })
        })
        .then(this._checkResponse)
    }

    deleteMovie (id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: this._headers,
            })
            .then(this._checkResponse)
        }
}

const MainApiConfig = {
    baseUrl: 'https://api.roman.diploma.nomoredomains.icu',
    // baseUrl: 'http://localhost:3000',
    moviesUrl: 'https://api.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json'
    }
  }
  
export const mainApi = new MainApi(MainApiConfig);