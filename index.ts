class Album{
title: string 
songs: string[]
constructor(title, songs:string[]){
this.title = title
this.songs = songs
}
}


class Banda{
    members: string[]
    albums:Album[]
    constructor(members:string[], albums:Album[]){
  this.members = members
 this.albums = albums
    }
}



function main(){
const unAlbum = {
    title: "album de exequiel",
    songs: [""]
}

  const unabanda = new Banda(["exequiel"], [unAlbum,unAlbum,unAlbum])
    console.log(unabanda.members)
    console.log(unabanda.albums)
 }
main()