
function copyright() {
    return new Date().getFullYear();
}

function like() {
    $("#like").click(function() {
        $(this).css('color','pink');
        alert("Thank you for like our website!")
    })
}

function tool() {
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
}

export { copyright };
export { like };
export { tool };