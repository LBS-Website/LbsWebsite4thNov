// ID of the Google Spreadsheet
 var spreadsheetID = "1vrB8KOju85u7uU1toljLpD5gnkNdIaQHzhnLM2crn_E";

 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;

  $(entry).each(function(){
    // Column names are name, age, etc.
    $('.results').prepend('<p class="light">'+this.gsx$heading.$t+'</p>');
  });

 });