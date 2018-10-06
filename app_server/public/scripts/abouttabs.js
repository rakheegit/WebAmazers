$(init);

function init() {
    $("#tabs").tabs({
        beforeLoad: function(event, ui) {
            ui.jqXHR.error(function() {
                ui.panel.html(
                    "Couldn't load this tab.");
            });
        }
    });
}