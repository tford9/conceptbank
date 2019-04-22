<script>
$('div#colorSelection').on('click', 'div', function(event){
    $('div.selectedColor').removeClass('selectedColor');
    $(this).addClass('selectedColor');
})
$('div#Paper-Tabs').on('click', 'div', function(event){
    var color = $('div.selectedColor').css('background-color');
    var squareId = $(this).id;

    $(this).css({"background-color":color});
    $('input[name="'+squareId+'"]').val(color);

});
</script>
    


<script>
function convertDate(d) {
  var p = d.split("/");
  return +(p[2]+p[1]+p[0]);
}

function sortByDate() {
  var tbody = document.querySelector("#results tbody");
  // get trs as array for ease of use
  var rows = [].slice.call(tbody.querySelectorAll("tr"));
  
  rows.sort(function(a,b) {
    return convertDate(a.cells[0].innerHTML) - convertDate(b.cells[0].innerHTML);
  });
  
  rows.forEach(function(v) {
    tbody.appendChild(v); // note that .appendChild() *moves* elements
  });
}


    </script>  