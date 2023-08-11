import bookReturn from "./bookReturn.js";


export const myBooksTable = (data) => {

    let info = data.message.data

    console.log(info);


    var table = document.getElementsByClassName('myBooks')[0];
    let initialRow = `<tr><td></td></tr>`
    table.innerHTML = initialRow

    table.innerHTML = ` <th> ${"Title"}</th>
                        <th> ${"Author"}</th>
                        <th> ${"ISBN"}</th>
						<th> ${"Borrow Date"}</th>
						<th><i class="fa-solid fa-right-left"></i></th>' 
`


    for (var i = 0; i < info.length; i++) {

        var row = `
				<tr>
      				<td>${info[i].Title}</td>
                    <td>${info[i].Name}</td>
                    <td>${info[i].ISBN}</td> 
      				<td>${info[i].Borrow_Date}</td>
					${`<td >  <button data-book-name = "${info[i].Title}" id="${info[i].ISBN}" class="bookReturn">Return</ button> </td> `}

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
