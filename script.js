const random = Math.floor(Math.random() * 101);
console.log(`Random number: ${random}`);

const form = document.getElementById("form");
const answer = document.getElementById("answer");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const checked = checkAnswer(random, Number(answer.value));

  if (checked) {
    alert("정답입니다.");
  } else {
    alert("오답입니다.");
  }
});

function checkAnswer(random, answer) {
  if (random === answer) {
    return true;
  } else {
    return false;
  }
}

module.exports = checkAnswer;
