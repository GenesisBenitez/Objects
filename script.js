var button = document.getElementById("generate");
var list = document.getElementById("list");

var person = {
    name: "Jerry",
    age: 22,
    insured: false,
    netWorth: 14000.28
}

var shows = [{

    name: "SpongeBob",
    description: "Come follow the adventures of the world's most lovable sponge and his starfish sidekick! Though they have the best intentions",
    img: "https://static.highsnobiety.com/thumbor/1I--jLgPdXGx4Z6IywL8mLv9R_U=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/06/14113650/spongebob-gay-pride-01.jpg"
},
{
name: "Hey Arnold!",
description: "Hey Arnold! is an American animated comedy television series created by Craig Bartlett that first aired on Nickelodeon on October 7, 1996",
img: "https://m.media-amazon.com/images/M/MV5BMGU1Zjg4MDctMmVjZi00OWFlLThmMzQtOWNkOGMzZDdiN2EzXkEyXkFqcGdeQXVyODA4OTIyMzY@._V1_.jpg"
},
{
    name: "Jimmy Neutron",
    description: "The show follows a boy named Jimmy Neutron from Retroville, Texas who is a scientific genius.",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Jimmy_Neutron_Boy_Genius_film.jpg/220px-Jimmy_Neutron_Boy_Genius_film.jpg"

},

{
    name: "Doug",
    description: "Doug is an American animated television series created by Jim Jinkins and produced by Jumbo Pictures. The show focuses on the early adolescent life",
    img: "https://m.media-amazon.com/images/M/MV5BNTMzYThjZjUtYzBiOS00YjQyLTgzZGMtNjg3OTU3MDA3NWYyXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg"
}

]

button.addEventListener("click", function(){
    list.innerHTML = "";
    for(var i = 0; i < shows.length; i++){
        var li = document.createElement("li");
        var h4 = document.createElement("h4");
        var p = document.createElement("p");
        var img = document.createElement("img");
        h4.innerHTML = shows[i].name;
        p.innerHTML = shows[i].description;
        img.src = shows[i].img;
        list.appendChild(li);
        li.appendChild(h4);
        li.appendChild(p);
        li.appendChild(img);
    }
    
})