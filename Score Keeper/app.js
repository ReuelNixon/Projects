const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const r = document.querySelector(".r");
const score = document.querySelector(".score");
const dropdown = document.querySelector("select");
const instruction = document.querySelector(".instruction");

s1 = 0;
s2 = 0;
max = dropdown.value;

dropdown.addEventListener("click", function () {
    max = dropdown.value;
    s1 = 0;
    s2 = 0;
    score.innerText = `${s1} to ${s2}`;
    p1.disabled = false;
    p2.disabled = false;
    // r.disabled = false;
});

p1.addEventListener("click", function () {
    s1 += 1;
    if (s1 == max) {
        score.innerText = `Player 1 won`;
        p1.disabled = true;
        p2.disabled = true;
        // r.disabled = true;
        instruction.innerText = "Select a new maximum score to continue";
    } else {
        score.innerText = `${s1} to ${s2}`;
    }
});

p2.addEventListener("click", function () {
    s2 += 1;
    if (s2 == max) {
        score.innerText = `Player 2 won`;
        p1.disabled = true;
        p2.disabled = true;
        r.disabled = true;
        instruction.innerText = "Select a new maximum score to continue";
    } else {
        score.innerText = `${s1} to ${s2}`;
    }
});

r.addEventListener("click", function () {
    s1 = 0;
    s2 = 0;
    score.innerText = `${s1} to ${s2}`;
});
