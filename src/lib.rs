
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::decode;

// Macro attribute: wasm bindgen will make the function public to JS. Bindgen crate can export functions
#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) {
    // Converts a string to a JS value with .into()
    log(&"Grayscale called".into());

    let base64_to_vector = decode(encoded_file).unwrap();
    log(&"Image decoded".into());
}