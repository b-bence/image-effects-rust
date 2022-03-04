async function init() {
    let rustApp = null

    try {
        // pkg/index. js is responsible for exporting Web Assemply
        rustApp = await import('../pkg')
    } catch (e) {
        console.error(e)
        return;
    }

    console.log(rustApp)

    const input = document.getElementById('upload')
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        let base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
          );
        // We don't have the convert the encoded string to a file object. Browsers support base64 images. 
        // Use this url to render an image and the browser will decode the image 
        let img_data_url = rustApp.grayscale(base64);
        document.getElementById('new-img').setAttribute(
            'src',img_data_url
        )
    }

    input.addEventListener('change', () => {
        // Its easier to transfer strings between JS and Rust. FileReader can convert a binary file to a string with base64 encoding
        fileReader.readAsDataURL(input.files[0])
    })

}

init()