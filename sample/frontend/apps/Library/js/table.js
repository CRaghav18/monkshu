
import removeBook from "./removeBook.js";
import borrow from "./borrow.js";



export const buildTable = (data) => {

	let type = localStorage.getItem('type');

	let table = document.getElementsByClassName('myTable')[0];

	let initialRow = `<tr><td></td></tr>`

	table.innerHTML = initialRow

	table.innerHTML = ` <th> ${"Title"}</th>
						<th> ${"Author"}</th>
						<th> ${"ISBN"}</th>
						<th> ${"Access No."}</th>
						<th> ${"Price"}</th>
						<th> ${"Shelf No."}</th>
						<th> ${"Row No."}</th>
						<th> ${"Availability"}</th>
						${type !== "Member" ? '<th><i class="fa-solid fa-trash"></i></th>' : ''}
						${type == "Member" ? '<th><i class="fa-solid fa-plus"></i></th>' : ''}

						<th>${"Next Available"}</th>   
`


	for (var i = 0; i < data.length; i++) {
		const currentDate = new Date();
		const year = currentDate.getFullYear();
		const month = String(currentDate.getMonth() + 1).padStart(2, '0');
		const day = String(currentDate.getDate()).padStart(2, '0');

		const sqliteDate = `${year}-${month}-${day}`;

		let availableDate = data[i].Date;

		if (availableDate == null) {
			availableDate = sqliteDate
		}
		if (sqliteDate == data[i].Date) {
			availableDate = 'Now'
		}

		var row = `
				<tr>
      				<td>${data[i].Title}</td> 
      				<td>${data[i].Author}</td>
      				<td>${data[i].ISBN}</td>
      				<td>${data[i].Access_No}</td>
      				<td>${data[i].Price}</td>
      				<td>${data[i].Shelf_No}</td>
      				<td>${data[i].Row_No}</td>
      				<td>${data[i].Availability}</td>    
					 ${type !== "Member" ? `<td id="removeRow"><button id="${data[i].ISBN}" class="remove-btn">Remove</button></td>` : ''}
				

					${type == "Member" ? `<td >  <button data-book-name = "${data[i].Title}" id="${data[i].ISBN}" class="borrow">Borrow</ button>
					</td> ` : ''}

					<td>${availableDate}</td>    

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

document.addEventListener('click', function (event) {
	const target = event.target;
	const bookName = target.dataset.bookName;

	if (target.classList.contains('borrow')) {
		borrow(target.id, bookName)

	}
});
