$(function(){
    $('#country').autocomplete('data.php?mode=sql', {
        width: 200,
        max: 5
    });

    $('#country2').autocomplete('data.php?mode=sql', {
        width: 200,
        max: 5
    });

    $('DIV#plus-form DIV#select-plane-2 #mes111').autocomplete('data.php?mode=sql', {
        width: 200,
        max: 5
    });

    $('#country22').autocomplete('data.php?mode=sql', {
        width: 200,
        max: 5
    });

});


