let generatedCode = "";
let currentUser = null;

function showSignUp() {
  document.getElementById('login-box').classList.add('hidden');
  document.getElementById('signup-box').classList.remove('hidden');
  document.getElementById('code-box').classList.add('hidden');
  document.getElementById('dashboard').classList.add('hidden');
}

function showLogin() {
  document.getElementById('login-box').classList.remove('hidden');
  document.getElementById('signup-box').classList.add('hidden');
  document.getElementById('code-box').classList.add('hidden');
  document.getElementById('dashboard').classList.add('hidden');
}

function sendVerificationCode() {
  const username = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;

  if (!username || !email || !password || !confirm) {
    alert("تکایە هەموو خانەکان پڕبکەوە");
    return;
  }
  if (password !== confirm) {
    alert("وشەکان یەکسان نین");
    return;
  }

  generatedCode = String(Math.floor(10000 + Math.random() * 89999));
  console.log("کۆدی تایبەتی نێردرا:", generatedCode);

  // لێرە دەتوانیت fetch ی POST بۆ Backend بفرێیت بۆ ناردنی ئیمەیڵ بە کۆد

  document.getElementById('signup-box').classList.add('hidden');
  document.getElementById('code-box').classList.remove('hidden');
}

function verifyCode() {
  const inputCode = document.getElementById('verificationCodeInput').value;
  if (inputCode === generatedCode) {
    currentUser = document.getElementById("signupUsername").value.trim();
    localStorage.setItem('user', currentUser);
    localStorage.setItem('balance', '0.00');

    document.getElementById('code-box').classList.add('hidden');
    showDashboard();
  } else {
    alert("کۆدی دڵنیاکردن هەڵەیە");
  }
}

function showDashboard() {
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('userDisplay').textContent = currentUser;
  document.getElementById('balanceDisplay').textContent = '$' + localStorage.getItem('balance');
}

function logoutUser() {
  localStorage.clear();
  currentUser = null;
  showLogin();
}

function loginUser() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  // لێرە پێویستە Backend هەبێت بۆ دڵنیاکردنی هەژمار و وشەی نهێنی
  // بۆ نموونەی سادە ئەمە:

  if(email === localStorage.getItem('email') && password === localStorage.getItem('password')){
    currentUser = localStorage.getItem('user');
    showDashboard();
  } else {
    alert("ئیمەیڵ یان وشەی نهێنی هەڵەیە");
  }
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
}
