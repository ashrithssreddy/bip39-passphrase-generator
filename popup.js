document.getElementById("generate").addEventListener("click", generatePassphrase);
document.getElementById("copy").addEventListener("click", copyToClipboard);

// Auto-generate when word count or separator is changed
document.getElementById("wordCount").addEventListener("change", generatePassphrase);
document.getElementById("separator").addEventListener("change", generatePassphrase);

function generatePassphrase() {
    const wordCount = parseInt(document.getElementById("wordCount").value, 10);
    const separator = document.getElementById("separator").value;  // Get selected separator
    let passphrase = [];

    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * bip39Words.length);
        passphrase.push(bip39Words[randomIndex]);
    }

    document.getElementById("passphrase").textContent = passphrase.join(separator);
}

function copyToClipboard() {
    const passphrase = document.getElementById("passphrase").textContent;
    navigator.clipboard.writeText(passphrase).then(() => {
        showCopyMessage(); // Call the new function for non-intrusive feedback
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}

function showCopyMessage() {
    let copyMsg = document.getElementById("copyMsg");
    if (!copyMsg) {
        copyMsg = document.createElement("span");
        copyMsg.id = "copyMsg";
        copyMsg.style.display = "block";
        copyMsg.style.marginTop = "5px";
        copyMsg.style.fontSize = "0.9em";
        copyMsg.style.color = "green";
        document.getElementById("copy").after(copyMsg);
    }

    copyMsg.textContent = "Copied!";
    copyMsg.style.opacity = "1";

    // Fade out after 2 seconds
    setTimeout(() => {
        copyMsg.style.opacity = "0";
    }, 2000);
}

// Generate a passphrase on initial load
generatePassphrase();
