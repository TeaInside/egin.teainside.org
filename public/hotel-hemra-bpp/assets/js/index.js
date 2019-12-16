// SEARCH GUEST
$(document).ready(function(){
    $("#search-guest").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#list-guest tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//TOOLTIPS
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})