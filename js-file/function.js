function functionClick(btn, boxTitle, inputField) {
  let history = document.getElementById("history-add");
  let text = document.getElementById(boxTitle).innerText;

  let h = document.createElement("p");
  h.innerText = `You have completed the task: ${text}`;
  history.appendChild(h);
  h.classList.add("history");

  const button = document.getElementById(btn);
  button.disabled = true;
  button.style.backgroundColor = "gray";
  button.innerText = "Completed";

  const inputText = document.getElementById(inputField);
    inputText.disabled = true;

  alert(`You have completed: ${text}`);

  let totalTask= document.getElementById("number-count");
  let convertTask = parseInt(totalTask.innerHTML);
  let totalCompleted= document.getElementById("total-completed");
  let convertedTotalTask = parseInt(totalCompleted.innerHTML);

  console.log( convertTask,convertedTotalTask)

  convertTask--;
  totalTask.innerText=convertTask
  convertedTotalTask++;
  totalCompleted.innerText=convertedTotalTask


  totalClick++
  if (totalClick === 6) {
    alert("Congratulations! You have completed all tasks.");
  }
}
let totalGivenTask = 6;
let totalCompleted = 25;
let totalClick = 0;
for (let c = 1; c <= 6; c++) {
  document.getElementById(`complete-btn${c}`).addEventListener("click", function () {
      functionClick(`complete-btn${c}`, `title-${c}`, `input${c}`);
    });
}

document.getElementById("clear-history").addEventListener("click", function(){
  const div =document.getElementById("history-add");
  const pTag =div.getElementsByTagName("p")
  while (pTag.length >0){
    pTag[0].remove()
  }  
})
