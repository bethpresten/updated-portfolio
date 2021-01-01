// console.log("hello world!")

$(document).ready(function () {
    console.log("ready!");
    $("#about-me").on("click", function () {
        const brandStatement = $("#brand-statement").attr("style", "visibility: visible;")
        const hideButton = $("#hide").attr("style", "display: none")
    })
});
