<script>
    
    $('div#colorSelection').on('click', 'div', function(event){
	    $('div.selectedColor').removeClass('selectedColor');
	    $(this).addClass('selectedColor');
	})
    $('div#squareContainer').on('click', 'div', function(event){
	    var color = $('div.selectedColor').css('background-color');
	    var squareId = $(this).id;

	    $(this).css({"background-color":color});
	    $('input[name="'+squareId+'"]').val(color);

	});



    function opentab(evt, topic) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(topic).style.display = "block";
    evt.currentTarget.className += " active";
  }
</script>
   