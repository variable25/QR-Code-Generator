let imgBox = document.getElementById("imgbox")
let qrImage = document.getElementById("qr-image")
let qrText = document.getElementById("qr-text")
let ButtonFn = document.querySelector("button")

ButtonFn.addEventListener("click", () => {
    if (qrText.value.length >0) {
        let inputText = qrText.value
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}` 
    } else {
        qrText.classList.add('error')
        setTimeout(() => {
        qrText.classList.remove('error')
            
        }, 1000);
    }

})