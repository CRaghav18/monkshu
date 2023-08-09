import { buildTable } from './table.js';

let token = localStorage.getItem('token')


export const getBooks = function () {

  document.querySelector('.table').style.visibility = 'visible'
  document.querySelector('.overlay').style.display = 'none'
  document.querySelector('.overlay2').style.display = 'none'



  let data = {}

  data.token = localStorage.getItem('token');

  fetch(Backend_URL + '/getBooks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`

    },
    body: JSON.stringify(data)
  }
  )
    .then(async (response) => {

      let result = await response.json()

      if (result.result) {

        let bookData = result.message.data
        console.log(bookData);
        buildTable(bookData)

      } else {
        console.log('Table is empty');
      }

    }).catch(async (err) => {

      console.log(err.message);

    })
};


let getBook = document.getElementById("getBooks")

getBook.addEventListener("click", getBooks);


