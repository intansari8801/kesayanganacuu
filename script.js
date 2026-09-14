function openLetter() {
  const letter = document.getElementById("letter");

  letter.classList.remove("hidden");
  letter.classList.add("show");

  setTimeout(() => {
    letter.scrollIntoView({
      behavior: "smooth"
    });
  }, 200);
}

function showMessage() {
  const message = document.getElementById("finalMessage");

  message.innerHTML =
    "Kalau nanti kamu membaca ini lagi, semoga kamu masih menjadi alasan yang sama untuk aku tersenyum. 🤍";
}
