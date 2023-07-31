import { buildTable } from './table.js';

let token = localStorage.getItem('token')


export const getBooks = function () {

  document.querySelector('.table').style.visibility = 'visible'
  document.querySelector('.overlay').style.display = 'none'
  document.querySelector('.overlay2').style.display = 'none'



  let data = {}

  data.token = localStorage.getItem('token');

  fetch('http://localhost:3000/getBooks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    },
    body: JSON.stringify(data)
  }
  )
    .then(async (data) => {

      let bookData = await data.json()


      buildTable(bookData)


    }).catch(async (err) => {

      console.log(err.message);

    })
};


let getBook = document.getElementById("getBooks")

getBook.addEventListener("click", getBooks);


