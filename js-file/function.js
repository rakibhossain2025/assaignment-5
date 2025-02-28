document.getElementById("complete-1").addEventListener("click", function () {
  const history = document.getElementById("history-add");
  const text = document.getElementById("title-1").innerText;
  const h = document.createElement("p");
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  h.innerText = `
  You have Complete The Task ${text} at ${hour}:${min} and ${va}
  `;
  console.log(h);
});
