// Enable cross-domain requests in CORS-Anywhere
jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

var similarArtist = "taylor swift"
var apikeyTasteDive = "368598-musicbuf-RZ4G3NI6"

var queryURL = "https://tastedive.com/api/similar?q=" + similarArtist + "&limit=10&info=1&k=" + apikeyTasteDive
// var queryURLSoundCloud = "https://api.soundcloud.com/tracks/13158665?client_id=" + apikeySoundCloud

var searchArtist = "taylor swift";
var queryURL2 = "https://openwhyd.org/search?q=" + searchArtist + "&format=json"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

});

$.ajax({
    url: queryURL2,
    method: "GET"
}).then(function (response) {
    console.log(response);

});