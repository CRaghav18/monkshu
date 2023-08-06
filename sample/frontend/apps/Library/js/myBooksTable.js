import bookReturn from "./bookReturn.js";


export const myBooksTable = (data) => {
    let type = localStorage.getItem('type');


    var table = document.getElementsByClassName('myBooks')[0];
    let initialRow = `<tr><td></td></tr>`
    table.innerHTML = initialRow

    table.innerHTML = ` <th> ${"User Name"}</th>
						<th> ${"Book Name"}</th>
						<th> ${"ISBN"}</th>
						${type == "Member" ? '<th><i class="fa-solid fa-right-left"></i></th>' : ''}
`


    for (var i = 0; i < data.length; i++) {

        var row = `
				<tr>
      				<td>${data[i].UserName}</td> 
      				<td>${data[i].BookName}</td>
      				<td>${data[i].ISBN}</td>			
					${type == "Member" ? `<td >  <button data-book-name = "${data[i].BookName}" id="${data[i].ISBN}" class="bookReturn">Return</ button>
					</td> ` : ''}

              </tr> `
        table.innerHTML += row


    }


};

document.addEventListener('click', function (event) {
    const target = event.target;
    const bookName = target.dataset.bookName;

    if (target.classList.contains('bookReturn')) {
        bookReturn(target.id, bookName)
    }
});
