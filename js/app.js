$(document).ready(function () {
    var addItem = $('#addItem');
    var removeItem = $('#remove');
    addItem.click(function () {
        var toAdd = $('input#text').val();
        $('#shoppingList').append('<li><input type="checkbox"/>' + toAdd + '</li>');
    });
    removeItem.click(function () {
        var toRemove = $('input#text').val();
        $('li:contains('+toRemove+')').remove();
    });
});


// check items off my list

// delete items from my list