
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::{encode,decode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;

// Macro attribute: wasm bindgen will make the function public to JS. Bindgen crate can export functions
// If we are borrowing, the type has to be: str. If we have ownership: String
#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String{
    // Converts a string to a JS value with .into()
    log(&"Grayscale called".into());

    // Value returned by the function is a Result -> we don't need to store that value, can use the unwrap instead to use the contained value
    let base64_to_vector = decode(encoded_file).unwrap();
    log(&"Image decoded".into());

    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"Image loaded".into());

    img = img.grayscale();
    log(&"Grayscale effect applied".into());

    let mut buffer = vec![];
    // Convert an image to binary data
    img.write_to(&mut buffer, Png).unwrap();
    log(&"New image written".into());

    // Convert the base64 string to a data url. JS creates a data url, which is metadata + base64 string
    // We removed the metadate earlier in main.js. Have to add this data back to have a full data url
    let encoded_img = encode(&buffer);
    let data_url = format!(
        "data:image/png;base64,{}",encoded_img
    );

    return data_url

}