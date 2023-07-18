//will look at it tom.

export const buildTable = (data) => {
	var table = document.getElementsByClassName('myTable')[0];
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
      				<td>${data[i].Name}</td>
      				<td>${data[i].Author}</td>
      				<td>${data[i].ISBN}</td>
      				<td>${data[i].AccessNo}</td>
      				<td>${data[i].Price}</td>
      				<td>${data[i].ShelfNo}</td>
      				<td>${data[i].RowNo}</td>
      				<td>${data[i].Availability}</td>              
              </tr>`
		table.innerHTML += row
	}
};
