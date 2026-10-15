// let addHome1 = document.getElementById("home-add-1")
let count  = 0
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function addhome1() {
    let count = Number(homeScore.textContent);
    count += 1;
    homeScore.textContent = count;
}

function addhome2() {
    let count = Number(homeScore.textContent);
    count += 2;
    homeScore.textContent = count;
}

function addhome3() {
    let count = Number(homeScore.textContent);
    count += 3;
    homeScore.textContent = count;
}

function addguest1() {
    let count = Number(guestScore.textContent);
    count += 1;
    guestScore.textContent = count;
}

function addguest2() {
    let count = Number(guestScore.textContent);
    count += 2;
    guestScore.textContent = count;
}

function addguest3() {
    let count = Number(guestScore.textContent);
    count += 3;
    guestScore.textContent = count;
}

function reset() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}

