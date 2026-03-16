document.getElementById("loadMessageBtn").addEventListener("click", async () => {
  const result = document.getElementById("result");

  try {
    const response = await fetch("http://localhost:4000/api/message");
    const data = await response.json();
    result.textContent = data.message;
  } catch (error) {
    result.textContent = "Failed to connect to backend.";
  }
});