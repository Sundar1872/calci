let result = document.getElementById("result");
function addValue(value) {
  result.value += value;
}
function clearScreen() {
  result.value = "";
}
function back() {
  result.value = result.value.slice(0, -1);
}
function calculate() {
  result.value = eval(result.value);
}
function convertToF() {
  let celsius = parseFloat(result.value);
  if (!isNaN(celsius)) {
    let fahrenheit = celsius * 9 / 5 + 32;
    result.value = fahrenheit + ' °F';
  }
}
function convertToC() {
  let fahrenheit = parseFloat(result.value);
  if (!isNaN(fahrenheit)) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    result.value = celsius + ' °C';
  }
}
function convertToFoot() {
  let meter = parseFloat(result.value);
  if (!isNaN(meter)) {
    let foot = meter / 0.304;
    result.value = foot.toFixed(2)+ ' Ft';
  }
}
function convertToMeter() {
  let foot  = parseFloat(result.value);
  if (!isNaN(foot )) {
    let meter= foot * 0.304;
    result.value = meter.toFixed(2)+ ' m';
  }
}