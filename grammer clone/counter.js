let textArea = document.getElementById("text");
let totalCount = document.getElementById("total__counter");
let remaining = document.getElementById("remaining__counter");
let userchar = 0;
const updateCount = () => {
  userC = textArea.value.length;
  totalCount.innerText = userC;
  remaining.innerText = 250 - userC;
};
textArea.addEventListener("keyup", () => updateCount());
const copyText = () => {
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textArea.value);
};
