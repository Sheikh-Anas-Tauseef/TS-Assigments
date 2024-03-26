// Define the make_album function
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating albums using make_album function
var album1 = make_album("Linkin Park", "Hybrid Theory", 12);
var album2 = make_album("Eminem", "The Marshall Mathers LP");
var album3 = make_album("Coldplay", "A Rush of Blood to the Head", 11);
// Printing the albums
console.log(album1);
console.log(album2);
console.log(album3);
