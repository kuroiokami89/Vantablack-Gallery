//TYPEWRITER NON-INFINITE
function createFiniteTypewriterEffect(
  elementSelector,
  textArray,
  intervalDuration,
) {
  let typeJsText = $(elementSelector);
  let stringIndex = 0;
  let charIndex = 0;
  let isTyping = true;

  function typeJs() {
    if (stringIndex < textArray.length) {
      const currentString = textArray[stringIndex];

      if (isTyping) {
        if (charIndex < currentString.length) {
          typeJsText.html(typeJsText.html() + currentString.charAt(charIndex));
          charIndex++;
        } else {
          isTyping = false;
        }
      } else {
        if (charIndex > 0 && stringIndex !== textArray.length - 1) {
          typeJsText.html(currentString.substring(0, charIndex - 1));
          charIndex--;
        } else {
          isTyping = true;
          stringIndex++;

          if (stringIndex >= textArray.length) {
            clearInterval(typeInterval);
          }

          charIndex = 0;
        }
      }
    }
  }

  // Set an interval to call the typeJs function
  let typeInterval = setInterval(typeJs, intervalDuration);
}

// Usage example:
// createTypewriterEffect(".animatedText", ["Projects", "Another String"], 100);

//TYPEWRITER INFINITE
// typewriter.js

function createInfiniteTypewriterEffect(
  elementSelector,
  textArray,
  intervalDuration,
) {
  const typeJsText = document.querySelector(elementSelector);
  let stringIndex = 0;
  let charIndex = 0;
  let isTyping = true;

  const typeJs = () => {
    if (stringIndex < textArray.length) {
      const currentString = textArray[stringIndex];

      if (isTyping) {
        if (charIndex < currentString.length) {
          typeJsText.textContent += currentString[charIndex];
          charIndex++;
        } else {
          isTyping = false;
        }
      } else {
        if (charIndex > 0) {
          typeJsText.textContent = currentString.substring(0, charIndex - 1);
          charIndex--;
        } else {
          isTyping = true;
          stringIndex = (stringIndex + 1) % textArray.length;
          charIndex = 0;
          typeJsText.textContent = "";
        }
      }
    }
  };

  setInterval(typeJs, intervalDuration);
}
