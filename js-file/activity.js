function click(btn , title , inputId) {
  let history = document.getElementById("history-add");
  let text = document.getElementById(title).innerText;
  let h = document.createElement("p");
  h.innerText = `You have Complete The Task ${text} at `;
  history.appendChild(h);
  h.classList.add('history');
  const button = document.getElementById(btn);
  button.disabled =true;
  button.style.backgroundColor="gray"
  const i =document.getElementById(inputId);
  i.disabled =true;
};