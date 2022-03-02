
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;

// Macro attribute: wasm bindgen will make the function public to JS. Bindgen crate can export functions
#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) {
    // Converts a string to a JS value
    log(&encoded_file.into());
}