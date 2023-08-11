import removeUser from "./removeUser.js";

export const buildTable = (data) => {
	var table = document.getElementsByClassName('myTable')[0];
	let initialRow = `<tr><td></td></tr>`
	table.innerHTML = initialRow
	table.innerHTML = ` <th> ${"Role"}</th>
						<th> ${"ID"}</th>
						<th> ${"User-Name"}</th>
						<th> ${"Email"}</th>
						<th> ${"<i class='fa-solid fa-trash'></i>"}</th>`
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
      				<td>${data[i].Role}</td>
      				<td>${data[i].ID}</td>
      				<td>${data[i].UserName}</td>
      				<td>${data[i].Email}</td>
					<td><button id="${data[i].UserName}" class="removeBtn" >Remove</button></td>

      				              
              </tr>`
		table.innerHTML += row
	}

};


document.addEventListener('click', function (event) {
	const target = event.target;

	if (target.classList.contains('removeBtn')) {
		removeUser(target.id)
	}
});

