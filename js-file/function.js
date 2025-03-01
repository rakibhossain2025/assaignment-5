let dates = document.getElementById("dates");
let DynamicDate = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "2-digit",
  year: "numeric",
});
dates.innerText = DynamicDate;

const backgroundColorList = [
  "rgb(140, 237, 166)",
  "rgb(146, 140, 237)",
  "rgb(237, 180, 140)",
  "rgb(205, 140, 237)",
  "rgb(241, 98, 98)",
];
let i = 0;
const bgChangeBtn = document
  .getElementById("color-change")
  .addEventListener("click", function () {
    i = (i + 1) % backgroundColorList.length;
    document.body.style.backgroundColor = backgroundColorList[i];
  });

function functionClick(btn, boxTitle, inputField) {
  let history = document.getElementById("history-add");
  let text = document.getElementById(boxTitle).innerText;

  const button = document.getElementById(btn);
  button.setAttribute("disabled", true);
  button.style.backgroundColor = "gray";
  button.style.cursor = "default";
  button.innerText = "Completed";
  const inputText = document.getElementById(inputField);
  inputText.setAttribute("disabled", true);

  alert(`Board updated successfully`);

  let totalTask = document.getElementById("number-count");
  let convertTask = parseInt(totalTask.innerHTML);
  let totalCompleted = document.getElementById("total-completed");
  let convertedTotalTask = parseInt(totalCompleted.innerHTML);

  let dynamicTime = new Date().toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  let h = document.createElement("p");
  h.innerText = `You have completed the task: ${text} at ${dynamicTime}`;
  history.appendChild(h);
  h.classList.add("history");

  convertTask--;
  totalTask.innerText = convertTask;
  convertedTotalTask++;
  totalCompleted.innerText = convertedTotalTask;

  totalClick++;
  if (totalClick === 6) {
    alert("Congratulations!!!   You have completed all the current tasks");
  }
}
let totalGivenTask = 6;
let totalCompleted = 25;
let totalClick = 0;
for (let c = 1; c <= 6; c++) {
  document
    .getElementById(`complete-btn${c}`)
    .addEventListener("click", function () {
      functionClick(`complete-btn${c}`, `title-${c}`, `input${c}`);
    });
}
const sdf=document.getElementById("clear-history").textContent;
console.log(sdf)


document.getElementById("clear-history").addEventListener("click", function () {
  const div = document.getElementById("history-add");
  const pTag = div.getElementsByTagName("p");
  while (pTag.length > 0) {
    pTag[0].remove();
  }
});
