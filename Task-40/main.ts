// Define the make_album function
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating albums using make_album function
let album1 = make_album("Linkin Park", "Hybrid Theory", 12);
let album2 = make_album("Eminem", "The Marshall Mathers LP");
let album3 = make_album("Coldplay", "A Rush of Blood to the Head", 11);

// Printing the albums
console.log(album1);
console.log(album2);
console.log(album3);
