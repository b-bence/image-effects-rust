function init() {

    const input = document.getElementById('upload')
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        let base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
          );
    }

    input.addEventListener('change', () => {
        // Its easier to transfer strings between JS and Rust. FileReader can convert a binary file to a string with base64 encoding
        fileReader.readAsDataURL(input.files[0])
    })

}

init()