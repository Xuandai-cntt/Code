$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("#accept").click(function () {
    if ($("#test").val()) {
      document.querySelector("#showUser").innerHTML =
        "Xin chào " + $("#test").val();

      $("#text-user").hide();
      $("#accept").hide();
      $("#exit").show();
    }
  });
  $("#exit").click(function () {
    $("#text-user").show();
    $("#accept").show();
    document.querySelector("#showUser").innerHTML = "";
    $("#exit").hide();
  });
});
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
searchButton.addEventListener("click", () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});
