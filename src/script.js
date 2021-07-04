import moment from "moment";

const $days = document.getElementById("days");
const $timeAt = document.getElementById("timeAt");
const $timeMessage = document.getElementById("timeMessage");

$days.addEventListener("keydown", (e) => {
  preventNonNumbersInput(e);
});

$days.addEventListener("keyup", (e) => {
  if (e.target.value > 180) {
    e.target.value = 180;
  }

  if (e.target.value < 0 || isNaN(e.target.value)) {
    e.target.value = 0;
  }

  if (e.target.value.length > 1 && e.target.value.startsWith("0")) {
    e.target.value = e.target.value.slice(1);
  }

  const brokableDays = Math.max(180 - e.target.value, 0);

  console.log(brokableDays);

  $timeAt.innerHTML = moment().add(brokableDays, "days").format("LL");

  if (e.target.value == "") {
    $timeMessage.style.visibility = "hidden";
  } else {
    $timeMessage.style.visibility = "visible";
  }
});

function preventNonNumbersInput(e) {
  const numbersOnly = new RegExp("^(Arrow|Digit|Backspace|Delete)");

  if (!numbersOnly.test(e.code)) {
    e.preventDefault();
  }
}
