import { buildTable } from './table.js';



export const getBooks = function () {

  document.querySelector('.table').style.visibility = 'visible'

  document.querySelector('.overlay').style.display = 'none'


  let data = {}

  data.token = localStorage.getItem('token');

  fetch('http://localhost:3000/getBooks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  )
    .then(async (data) => {

      let bookData = await data.json()

      console.log('Working');

      buildTable(bookData)

    }).catch(async (err) => {

      console.log(err.message);

    })
};


let getBook = document.getElementById("getBooks")

getBook.addEventListener("click", getBooks);


