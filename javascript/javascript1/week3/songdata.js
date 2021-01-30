

    const songDatabase = [{
      songId: 1,
      title: 'My baby',
      artist: 'Soggy socks',
    },
    {
      songId: 2,
      title: '3 nails in wood',
      artist: 'The carpenters',
    },
    {
      songId: 3,
      title: 'Blacker than black',
      artist: 'Instant coffee',
    },
    {
      songId: 4,
      title: 'When is enough too little?',
      artist: 'The spies girls',
    },
  ];

  const myPlaylist = [];
  
/*Add songs*/

function addSongToDatabase(song) {
  
  const songs = [songDatabase];  
}

songDatabase.push(
  {songId: 5,  title: 'Shilo', artist: 'GAEL'},
  {songId: 6, title: 'TABIRI', artist: 'DEBORAH LUKALU'},
  {songId: 7,title: 'Saint Esprit', artist: 'Dena Mwana'}
  )
  

  console.log(songDatabase);

/*search song*/

function getSongByTitle(title){
    for (const song of songDatabase) {
    if (song.title === title) {
      return song;
     
    }
}
}
const searchedSong = getSongByTitle('Saint Esprit');
console.log(searchedSong);

//Create our own playlist

function addSongToMyPlaylist(title){
 const searchedsong = [getSongByTitle];
}
myPlaylist.push(
  {songId: 7,title: 'Saint Esprit', artist: 'Dena Mwana'},
)

console.log(myPlaylist);

//Improving our application

addSongToDatabase({
  songId: 8,  title: 'Abba Père', artist: 'José-Nzita',
});
addSongToDatabase({
  songId: 9, title: 'Abba Père', artist: 'Emmanuel Musongo',
});

function getSongByTitle(title){
  const allsong = [songDatabase]
  for (const song of songDatabase) {
    if (song.title === title) {
      
    }
}
return allsong;
}
songDatabase.push(
  {songId: 8,  title: 'Abba Père', artist: 'José-Nzita'},
  {songId: 9, title: 'Abba Père', artist: 'Emmanuel Musongo'},
)

console.log(getSongByTitle('Abba Père'));