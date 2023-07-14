'use strict'


let getBooks = function(){

  fetch('http://localhost:3000/getBooks',{

  METHID: 'GET',
  HEADER: { 
    'contenct-type':'application.json'
  },
body:JSON.stringify()}
  )
.catch()
.then(async(data)=>{

    let bookData = await data.json()

console.log(bookData);


})


  
}