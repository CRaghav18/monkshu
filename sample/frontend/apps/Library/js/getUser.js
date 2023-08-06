import { buildTable } from './tableUser.js';

let token = localStorage.getItem('token')

export const getUser = function () {

  document.querySelector('.table').style.visibility = 'visible'
  document.querySelector('.overlay').style.display = 'none'
  document.querySelector('.overlay2').style.display = 'none'


  let data = {}

  data.token = localStorage.getItem('token');
  data.type = localStorage.getItem('type')

  fetch(Backend_URL + '/getUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

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


