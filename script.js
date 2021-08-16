// 16.08.21 async, await, try, catch, axios, finally
// await

// step 1
// function getPeople(id) {
//     fetch(`https://swapi.dev/api/people/${id}/`)
//         .then(res => res.json())
//         .then(data => data)
// }
//
// console.log(getPeople(4)) // undefined потому что функция должна возвращать что-то


// step2
// function getPeople(id) {
//     return fetch(`https://swapi.dev/api/people/${id}/`)
//         .then(res => res.json())
//         .then(data => data)
// }
//
// console.log(getPeople(4)) // Promise {<pending>}


// // step 3
// function getPeople(id) {
//     return fetch(`https://swapi.dev/api/people/${id}/`)
//
// }
//
// getPeople(4)
//     .then(res => res.json())
//     .then(data => console.log(data)) // {name: "Darth Vader", height: "202", mass: "136", hair_color: "none", skin_color: "white", …}


// // step 4
// function getPeople(id) {
//     return fetch(`https://swapi.dev/ai/people/${id}/`)
//
// }
//
// getPeople(4)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch((error) => console.log(error)) // TypeError: Failed to fetch "ssylka nepravil'naya"


// // -------JS sync or async-------
// // \\ порядок выведения в консоль
//  const second = () => {
//      console.log("Hello there!") // 2
//  }
// const first = () => {
//     console.log("Hi there!") // 1
//     second()
//     console.log("The End!") // 3
// }
// console.log(first())


// const example = () => {
//     setTimeout(() => {
//         console.log(1111) // 2 через 2 секунды
//     }, 2000)
//     console.log(1234) // 1
// }
//
// example()

const getPeople = (id) => {
    const people = fetch(`https://swapi.dev/api/people/${id}/`)
    return people
}
console.log(getPeople(4)) // Promise{<pending>}

// const axios = require("axios")
// let loader = true
// const getPeople = async (id) => {
//     try{
//         const people = await axios(`https://swapi.dev/api/people/${id}/`)
//         console.log(people.data)
//     } catch (error){
//         console.log(777)
//     } finally {
//         loader = false
//         console.log(loader)
//     }
// }
// getPeople(4)


// const axios = require("axios")
// let loader = true
// const getPeople = async (id) => {
//     try{
//         const {data: people}= await axios(`https://swapi.dev/api/people/${id}/`)
//         const filmsArray = await Promise.all(people.films.map(async (link) => {
//             const {data: oneFilmObj} = await axios(link)
//             return oneFilmObj
//         }))
//         console.log({...people, films: filmsArray})
//     } catch (error){
//         console.log(777)
//     } finally {
//         loader = false
//         console.log(loader)
//     }
// }
// getPeople(4)


// const axios = require("axios")
// const getUsers = async() => {
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")
//     console.log(users)
// }
// getUsers()


// // Модульность в JavaScript
//
// import {sayGreeting} from "./greeting.js";
// import{sum, square} from "./mathematics.js";
//
//
//
// console.log(sum(3, 80))
// console.log(square(8))
// console.log(sayGreeting("kg"))
// console.log(sayGreeting("ua"))