// OVERALL

$(function () {
    lightbox();
});



// LIGHTBOX

function lightbox() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
}
