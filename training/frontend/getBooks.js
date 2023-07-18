import { buildTable } from './table.js';

export const getBooks = function () {

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

document.getElementById("getBooks")
  .addEventListener("click", getBooks);


/* 

- connect login button to dashboard page
- show no match/ incorrect credentials, empty  on login page

*/