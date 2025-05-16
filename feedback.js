function saveFeedback() {
  const email = document.querySelector('input[type="email"]').value;
  const feedback = document.querySelector('textarea').value;
  localStorage.setItem("email", email);
  localStorage.setItem("feedback", feedback);
  alert("Feedback saved locally!");
}