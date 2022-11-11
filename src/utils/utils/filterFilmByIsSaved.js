export const filterFilmByIsSaved = (movies, isSaved, cardKey) => {    
    const result =  movies.filter((item) => {
        console.log('item.id ' + item.id);
        console.log('cardKey ' + cardKey);
        console.log('isSaved ' + isSaved);

        return item.id === cardKey && isSaved;
    })
    // const arr = [{1: 1}, {2: 2}, {3: 3}];
    // localStorage.setItem('myArr', arr);
    // const cat = localStorage.getItem('myArr');
    // console.log('myArr ' + cat)
    // // console.log(cat[0])
    // // console.log(arr)
    // // console.log(cat)
    // // console.log(Array.from(cat))
    console.log('result ' + result)
    console.log(result)
return result;
}