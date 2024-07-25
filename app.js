console.log("We are live, Fortuna's wheel");

function triangle() {
    var star = "*";
    var stars = "*";
    for (var i = 0; i < 5; i++) {
        console.log(stars);
        stars = stars + star;
    }
}

triangle();