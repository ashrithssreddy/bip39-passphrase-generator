document.getElementById("generate").addEventListener("click", generatePassphrase);
document.getElementById("copy").addEventListener("click", copyToClipboard);

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
        alert("Passphrase copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}
