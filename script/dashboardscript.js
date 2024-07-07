document.getElementById("searchButton").addEventListener("click", function () {
  var input = document.getElementById("searchInput").value;
  var filter = input.toUpperCase();
  var table = document.getElementById("berkasTable");
  var tr = table.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
