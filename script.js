function showSignUp() {
  document.getElementById("login-box").classList.add("hidden");
  document.getElementById("signup-box").classList.remove("hidden");
}
function showLogin() {
  document.getElementById("signup-box").classList.add("hidden");
  document.getElementById("login-box").classList.remove("hidden");
}
function sendVerificationCode() {
  document.getElementById("signup-box").classList.add("hidden");
  document.getElementById("code-box").classList.remove("hidden");
}
function verifyCode() {
  document.getElementById("code-box").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("userDisplay").innerText = document.getElementById("signupUsername").value;
  document.getElementById("clickSound").play();
}
function loginUser() {
  document.getElementById("login-box").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("userDisplay").innerText = "بەکارهێنەر";
  document.getElementById("clickSound").play();
}
function logoutUser() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("login-box").classList.remove("hidden");
}
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
