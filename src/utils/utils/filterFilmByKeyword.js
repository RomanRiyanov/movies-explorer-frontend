export const filterFilmByKeyword = (movies, keyword, short) => {
    const trimmedKeyword = keyword.trim();

    if (trimmedKeyword.toLowerCase() === 'все' ||
        trimmedKeyword.toLowerCase() === 'всё' ||
        trimmedKeyword.toLowerCase() === 'all' 
    ) return movies;
    else {
        const uniqueMovies = new Set();
        const keywordArr = trimmedKeyword.split(' ');

        keywordArr.forEach((item) => {
            const word = item.trim();
            
            const result = movies.filter((movie) => {
            return  movie['nameRU'].toLowerCase().includes(word.toLowerCase()) ||
                    movie['nameEN'].toLowerCase().includes(word.toLowerCase()) ||  
                    movie.description.toLowerCase().includes(word.toLowerCase()) ||
                    movie.director.toLowerCase().includes(word.toLowerCase()) ||
                    movie.country.toLowerCase().includes(word.toLowerCase()) ||
                    movie.year.toLowerCase().includes(word.toLowerCase())
            });
            result.forEach((res) => uniqueMovies.add(res));
        })

        const resultMovies =  Array.from(uniqueMovies);
        if (short) {
            const shortResult = resultMovies.filter((movie) => {
                return movie.duration <= 40
            });
            return shortResult;
        }
    
        else return resultMovies;
    }
}