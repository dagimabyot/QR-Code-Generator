const input = document.getElementById('input');
const qrimg = document.getElementById('qr-img');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const inputValue = input.value;

    if (!inputValue) {
        alert("Please Enter a valid URL");
        return;
    } else {
        // Set the src attribute of the image element to the QR code URL
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt = `QR Code for ${inputValue}`;
    }
});
