function encryptText() {
    var inputText = document.getElementById('inputText').value;
    var encryptionKey = document.getElementById('encryptionKey').value;

    if (inputText === '' || encryptionKey === '') {
        alert('Por favor ingresa texto y una clave para encriptar.');
        return;
    }

    var encryptedText = CryptoJS.AES.encrypt(inputText, encryptionKey).toString();
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('outputTextDisplay').style.display = 'block';
}

function decryptText() {
    var encryptedText = document.getElementById('outputText').value;
    var decryptionKey = document.getElementById('encryptionKey').value;

    if (encryptedText === '' || decryptionKey === '') {
        alert('Por favor ingresa texto encriptado y una clave para desencriptar.');
        return;
    }

    try {
        var decryptedBytes = CryptoJS.AES.decrypt(encryptedText, decryptionKey);
        var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
        document.getElementById('inputText').value = decryptedText;
    } catch (error) {
        alert('Error al desencriptar el texto. Verifica la clave y el texto encriptado.');
    }
}
