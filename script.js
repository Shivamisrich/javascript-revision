const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Typing fast is a great skill",
    "JavaScript is a powerful language",
    "Practice makes a man perfect",
    "I love solving problems with code"
  ];
  
  let currentSentence = "";
  let startTime;
  
  function startTest() {
    // Reset everything
    const randomIndex = Math.floor(Math.random() * sentences.length);
    currentSentence = sentences[randomIndex];
    document.getElementById("sentence").innerText = currentSentence;
    document.getElementById("input").value = "";
    document.getElementById("result").innerText = "";
    startTime = null;
  }
  
  document.getElementById("input").addEventListener("input", function () {
    const typedText = this.value;
  
    if (!startTime) {
      startTime = new Date();
    }
  
    if (typedText === currentSentence) {
      const endTime = new Date();
      const timeTaken = (endTime - startTime) / 1000; // in seconds
      const wordCount = currentSentence.split(" ").length;
      const speed = Math.round((wordCount / timeTaken) * 60);
      document.getElementById("result").innerText =
        `✅ Completed in ${timeTaken.toFixed(2)} seconds\n⚡ Speed: ${speed} WPM`;
    }
  });
  
  // Auto start on load
  startTest();