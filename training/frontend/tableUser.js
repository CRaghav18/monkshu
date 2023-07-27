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
      				<td>${data[i].Type}</td>
      				<td>${data[i].Id}</td>
      				<td>${data[i].Username}</td>
      				<td>${data[i].Email}</td>
					<td><button id="${data[i].Username}" class="removeBtn" >Remove</button></td>

      				              
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

