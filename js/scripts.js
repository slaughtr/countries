//business logic
function Country(countryNameParam, languageParam, dateParam, notesParam, picParam) {
  this.countryName = countryNameParam;
  this.lanuageUsed = languageParam;
  this.date = dateParam;
  this.notes = notesParam;
  this.image = picParam;
}

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

// user interface logic
$(document).ready(function() {
console.log("loads page")
  $("form#new-country").submit(function(event) {
      debugger;
    event.preventDefault();
    var countryNameVar = $("input#new-countryName").val();
    var languageVar = $("input#new-language").val();
    var dateVar = $("input#new-date").val();
    var notesVar = $("input#new-notes").val();
    var pictureURLVar = $("input#new-image").val();
    var newCountry = new Country(countryNameVar, languageVar, dateVar, notesVar, pictureURLVar);

    $("ul#countries").append("<li><span class='country'>" + newCountry.countryName + "</span></li>");
    $(".country").last().click(function() {
      $("#show-countries").show();
      $("#show-countries h2").text(newCountry.countryName);
      $(".country-display").text(newCountry.countryName);
      $(".language-display").text(newCountry.languageUsed);
      $(".date-display").text(newCountry.date);
      $(".notes-display").text(newCountry.notes);
      $(".picture-display").html("<img src='http://lorempixel.com/200/200/people'>");
    });
    $("input#new-countryName").val("");
    $("input#new-language").val("");
    $("input#new-date").val("");
    $("input#new-notes").val("");
    $("input#new-image").val("");
  });
});
