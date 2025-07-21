const signupForm = document.getElementById("signupForm");
const verifyForm = document.getElementById("verifyForm");
const messageDiv = document.getElementById("message");

let generatedCode = "";

// فۆنکشنی دروستکردنی کۆدی ٥ ژمارەیی
function generateCode() {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

// ناردنی کۆد بۆ API ی Replit ـەکەت
async function sendCode(email, code) {
  try {
    const response = await fetch("https://your-replit-username.your-project-name.repl.co/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("هەڵە لە ناردنی کۆد:", error);
    return false;
  }
}

// تۆمارکردن - بەکارهێنەری نوێ
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();

  if (!email) {
    messageDiv.textContent = "تکایە ئیمەیڵ دروست بنووسە.";
    return;
  }

  generatedCode = generateCode();

  const sent = await sendCode(email, generatedCode);
  if (sent) {
    messageDiv.textContent = "کۆدی دڵنیاکردن بۆ ئیمەیڵەکەت نێردرا.";
    signupForm.style.display = "none";
    verifyForm.style.display = "block";
  } else {
    messageDiv.textContent = "کێشە هەبوو لە ناردنی کۆدی دڵنیاکردن.";
  }
});

// دڵنیاکردنی کۆد
verifyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const codeInput = document.getElementById("codeInput").value.trim();

  if (codeInput === generatedCode) {
    messageDiv.textContent = "هەژمارەکەت بە سەرکەوتوویی دروست بوو! 👏";
    verifyForm.style.display = "none";
  } else {
    messageDiv.textContent = "کۆدی هەڵەیە، تکایە دووبارە هەوڵبدە.";
  }
});
