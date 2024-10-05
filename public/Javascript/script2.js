// Array of sign language images and corresponding answers
const questions = [
    { src: 'images/a.png', answer: 'A' },
    { src: 'images/b.png', answer: 'B' },
    { src: 'images/c.png', answer: 'C' },
    { src: 'images/d.png', answer: 'D' },
    { src: 'images/e.png', answer: 'E' },
    { src: 'images/f.png', answer: 'F' },
    { src: 'images/g.png', answer: 'G' },
    { src: 'images/h.png', answer: 'H' },
    { src: 'images/i.png', answer: 'I' },
    { src: 'images/j.png', answer: 'J' },
    { src: 'images/k.png', answer: 'K' },
    { src: 'images/l.png', answer: 'L' },
    { src: 'images/m.png', answer: 'M' },
    { src: 'images/n.png', answer: 'N' },
    { src: 'images/o.png', answer: 'O' },
    { src: 'images/p.png', answer: 'P' },
    { src: 'images/q.png', answer: 'Q' },
    { src: 'images/r.png', answer: 'R' },
    { src: 'images/s.png', answer: 'S' },
    { src: 'images/t.png', answer: 'T' },
    { src: 'images/u.png', answer: 'U' },
    { src: 'images/v.png', answer: 'V' },
    { src: 'images/w.png', answer: 'W' },
    { src: 'images/x.png', answer: 'X' },
    { src: 'images/y.png', answer: 'Y' },
    { src: 'images/z.png', answer: 'Z' },
    // words and sentences
    { src: 'images/hello.png', answer: 'HELLO' },
    { src: 'images/thank_you.png', answer: 'THANK YOU' },
    { src: 'images/i_love_you.png', answer: 'I LOVE YOU' },
    { src: 'images/sorry.png', answer: 'SORRY' },
    { src: 'images/y_r_w.png', answer: 'YOU ARE WELCOME' },
    { src: 'images/yes.png', answer: 'YES' },
    { src: 'images/no.png', answer: 'NO' },
    { src: 'images/house.png', answer: 'HOUSE' },
    { src: 'images/good_bye.png', answer: 'GOOD BYE' },
    { src: 'images/family.png', answer: 'FAMILY' }
];

// Display the corresponding image for the typed input
function submitAnswer() {
    let userAnswer = document.getElementById('userInput').value.trim().toUpperCase();
    let found = false;

    for (const question of questions) {
        if (userAnswer === question.answer.replace(/\s+/g, '')) {
            const signImage = document.getElementById('signImage');
            signImage.src = question.src;
            signImage.style.display = 'block'; // Ensure the image is visible
            document.getElementById('message').textContent = `Displaying: ${question.answer}`;
            found = true;

            // Hide the image after 10 seconds
            setTimeout(() => {
                signImage.style.display = 'none';
                document.getElementById('message').textContent = ''; // Clear the message
            }, 10000);

            break;
        }
    }

    if (!found) {
        document.getElementById('message').textContent = 'No matching sign found!';
    }

    document.getElementById('userInput').value = '';  // Clear the input field
}

// Add letter to input field when clicked on the virtual keypad
function enterLetter(letter) {
    document.getElementById('userInput').value += letter;
}

function deleteLetter() {
    const userInput = document.getElementById('userInput');
    userInput.value = userInput.value.slice(0, -1);  // Remove the last character
}
