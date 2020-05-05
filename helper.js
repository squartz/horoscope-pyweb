var d = new Date();
document.getElementById("data-today").innerHTML = d.toLocaleDateString();

function set_paragraph(data) {
  $.each(data["prophecies"], function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
  })
}    
function click_text() {
    $.getJSON("http://sf-pyw.mosyag.in/m04/api/forecasts", set_paragraph)
}

$("#click_day").click(click_text);