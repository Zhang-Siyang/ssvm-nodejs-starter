use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn say(s: &str) -> String {
  println!("The Rust function say() received {}", s);
  let r = String::from("hello ");
  return r + s;
}

#[wasm_bindgen]
pub fn smart(s: &str) -> String {
  println!("Rust 函数 smart() 接收到了 '{}'", s);
  let patterns: &[_] = &['吗', '？'];
  let result = s.trim_matches(patterns);
  return format!("{}!!!", result);
}