var arr = ["tops/books.html",
"tops/youtubers.html", "tops/countries.html",
"tops/food.html", "tops/music.html", "tops/people.html", "tops/tech.html"];

function randSite(){
        location.href = "" + arr[Math.floor (Math.random()*arr.length)];
}