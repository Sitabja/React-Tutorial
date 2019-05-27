const URL_ALL_COUNTRY = "https://restcountries-v1.p.rapidapi.com/all"
const API_KEY = '9af9ada620msh6e73d07879566fcp1366e1jsnf14c3057ea49'

export const getAllCountry = async (pageNumber, size)=>{
    let res = await fetch(URL_ALL_COUNTRY,{
        headers:{
            'X-RapidAPI-Key':API_KEY
        }})  
    res = await res.json()
    return shuffleArray(res).slice(pageNumber, size);
}

const shuffleArray = (arr) => {
    return arr.map(element => [element, Math.random()]).sort((a, b) => a[1] - b[1]).map(element => element[0])

}

export const sortBy = (arr, label) =>{
    return arr.sort((country1, country2)=>{
        if(label === 'country')
            return country1.name > country2.name ? 1 : -1
        else
            return country1.capital > country2.capital ? 1 : -1
    })
}