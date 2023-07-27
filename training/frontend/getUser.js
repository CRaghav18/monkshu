import { buildTable } from './tableUser.js';

export const getUser = function () {

  document.querySelector('.table').style.visibility = 'visible'

  document.querySelector('.overlay').style.display = 'none'

  let data = {}

  data.token = localStorage.getItem('token');
  data.type = localStorage.getItem('type')

  fetch('http://localhost:3000/getUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  )
    .then(async (data) => {

      let userData = await data.json()

      buildTable(userData)

    }).catch(async (err) => {

      console.log(err.message);

    })
};

document.getElementById("getUser").addEventListener("click", getUser);


