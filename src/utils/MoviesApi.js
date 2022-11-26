class MoviesApi {
  constructor (config) {
      this._baseUrl = config.baseUrl;
      this._headers = config.headers
  }

  _checkResponse(res) {
      if (res.ok) {
          return res.json()
      } else return Promise.reject(`Ошибка: ${res.status}`)
  }
    
  getMovies() {
    return fetch(`${this._baseUrl}`, {
            method: 'GET'
        })
        .then(this._checkResponse)
    }
}

const MoviesApiConfig = {
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
export const moviesApi = new MoviesApi(MoviesApiConfig);