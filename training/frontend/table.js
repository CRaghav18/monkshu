
import removeBook from "./removeBook.js";

export const buildTable = (data) => {



	var table = document.getElementsByClassName('myTable')[0];
	let initialRow = `<tr><td></td></tr>`
	table.innerHTML = initialRow

	table.innerHTML = ` <th> ${"Name"}</th>
						<th> ${"Author"}</th>
						<th> ${"ISBN"}</th>
						<th> ${"Access No."}</th>
						<th> ${"Price"}</th>
						<th> ${"Shelf No."}</th>
						<th> ${"Row No."}</th>
						<th> ${"Availability"}</th>`

	for (var i = 0; i < data.length; i++) {
		var row = `
				<tr>
      				<td>${data[i].Name}</td> 
      				<td>${data[i].Author}</td>
      				<td>${data[i].ISBN}</td>
      				<td>${data[i].AccessNo}</td>
      				<td>${data[i].Price}</td>
      				<td>${data[i].ShelfNo}</td>
      				<td>${data[i].RowNo}</td>
      				<td>${data[i].Availability}</td>   
					<td><button id="${data[i].ISBN}" class="remove-btn">Remove</button></td>     
              </tr> `
		table.innerHTML += row


	}


};

document.addEventListener('click', function (event) {
	const target = event.target;

	if (target.classList.contains('remove-btn')) {
		removeBook(target.id)
	}
});
