//VARIABLES
//==================================================================
let spaceObj = ['sun', 'moon', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'neptune', 'uranus', 'pluto', 'asteroid', 'space shuttle','rocket', 'nasa', 'astronaut', 'cosmonaut', 'space station', 'satellite', 'stars', 'aliens'];


//FUNCTIONS
//=================================================================

//Function that builds the buttons in the array
function buildButtons() {
    for(var i=0; i < spaceObj.length; i++) {
        var button = $( '<button type="button" class="btn btn-light giphyButton">' )
        button.attr('data-name', spaceObj[i]);
        button.text(spaceObj[i]);
        $('#buttonRow').append(button);
    }
}

//function that grabs the value in 'search bar', adds it to the spaceObj array
function addButton () {
    //grab text from spaceObject text bar
    var query=$( '#spaceObject' ).val().trim();
    //push it into array
    spaceObj.push(query);
    //clear out prior version of the button row
    $('#buttonRow').empty();
    //update the button row
    buildButtons();
    //ended up clearing the input using HTML, probably not ideal
    
}


//MAIN PROCESSES
//=================================================================

$(document).ready(function() {
    //intitial call
    buildButtons();

    $( '#submit' ).on("click", function(event){
        event.preventDefault();
        addButton();
    });

//alert('Script linked!');
})//end of ready wrap function