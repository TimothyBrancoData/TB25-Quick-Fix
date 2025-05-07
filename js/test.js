// TODO Add a interate for the amount of images the user uploads and spitout the value into string pairs

const imageStore = ["image001", "image002", "image003", "image004"];
const formatTypes = ["0", "00", "000", "0000"];
let num = 0;

function countNumbers(iterator, array, value) {
  for (let i = 0; i < array.length; i++) {
    if (i >= iterator && array.length <= value) {
      iterator++;
    }
  }
  return iterator;
}

function getFormat(input) {
  switch (input) {
    case formatTypes[0]:
      console.log(countNumbers(num, imageStore, 9));
      break;
    case formatTypes[1]:
      console.log(countNumbers(num, imageStore, 99));
      break;
    case formatTypes[2]:
      console.log(countNumbers(num, imageStore, 999));
      break;
    case formatTypes[3]:
      console.log(countNumbers(num, imageStore, 9999));
      break;
    default:
      console.log("No vaild input");
      break;
  }
}

getFormat("0");
