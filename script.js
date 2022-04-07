var list1 = [];

var list2 = [];

var list3 = [];

var list4 = [];

var n = 1;

var x = 0;

function AddRow() {

    var AddRown = document.getElementById('show');

    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById('ID').value;

    list2[x] = document.getElementById('name').value;

    list3[x] = document.getElementById('feedback').value;

    list4[x] = document.getElementById('comments').value;

    var cel1 = NewRow.insertCell(0);

    var cel2 = NewRow.insertCell(1);

    var cel3 = NewRow.insertCell(2);

    var cel4 = NewRow.insertCell(3);

    cel1.innerHTML = list1[x];

    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];

    cel4.innerHTML = list4[x];

    n++; //n++ : n = n +1

    x++;
}
    function ExportToExcel(type, fn, dl) {

        var elt = document.getElementById('show');
        var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet!" });
        return dl ?
            XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
            XLSX.writeFile(wb, fn || ('My feedback:.' + (type || 'xlsx')));
    }