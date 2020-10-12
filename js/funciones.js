$(function() {
    $("html, body, *").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 80);
        this.scrollRight -= (delta * 80);
        event.preventDefault();
    });
});