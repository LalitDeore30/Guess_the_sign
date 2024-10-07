function convertToSignLanguage() {
    let inputText = document
        .getElementById("textInput")
        .value.toLowerCase();
    let outputDiv = document.getElementById("signContainer");
    let fullOutputDiv = document.getElementById("fullSignOutput");

    outputDiv.innerHTML = "";
    fullOutputDiv.innerHTML = "";

    let delay = 1000; // 1 second delay
    let index = 0;

    function displayNextCharacter() {
        if (index < inputText.length) {
            let char = inputText[index];

            if (char >= "a" && char <= "z") {
                let img = document.createElement("img");
                img.src = "images/" + char + ".png"; // Assuming images are named a.png, b.png, etc.
                img.alt = char;

                outputDiv.innerHTML = ""; // Clear previous character
                outputDiv.appendChild(img);
            } else if (char === " ") {
                outputDiv.innerHTML = ""; // For space, clear the display (pause effect)
            }

            index++;
            setTimeout(displayNextCharacter, delay);
        }
    }

    displayNextCharacter();

    let words = inputText.split(" ");
    words.forEach((word, wordIndex) => {
        let wordContainer = document.createElement("div");
        wordContainer.classList.add("word-container");

        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (char >= "a" && char <= "z") {
                let img = document.createElement("img");
                img.src = "images/" + char + ".png";
                img.alt = char;

                let letter = document.createElement("span");
                letter.textContent = char;

                wordContainer.appendChild(img);
                wordContainer.appendChild(letter);
            }
        }

        fullOutputDiv.appendChild(wordContainer);
    });
}

function toggleFullWordDisplay() {
    let fullDisplayContainer = document.getElementById(
        "fullDisplayContainer"
    );
    let showFullWordBtn = document.getElementById("showFullWordBtn");

    if (fullDisplayContainer.style.display === "none") {
        fullDisplayContainer.style.display = "block";
        showFullWordBtn.textContent = "Hide Full Word";
    } else {
        fullDisplayContainer.style.display = "none";
        showFullWordBtn.textContent = "Show Full Word";
    }
}

// Speech recognition
function startSpeechRecognition() {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Sorry, your browser does not support speech recognition.");
        return;
    }

    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function () {
        document.getElementById("micButton").style.backgroundColor =
            "#ff4d4d"; // Change mic button color to show it's listening
    };

    recognition.onend = function () {
        document.getElementById("micButton").style.backgroundColor =
            "#ff6666"; // Revert mic button color when done
    };

    recognition.onresult = function (event) {
        let speechResult = event.results[0][0].transcript.toLowerCase();
        document.getElementById("textInput").value = speechResult;
    };

    recognition.start();
}