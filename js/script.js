// let imageArray = [];
// var selectedImage = document.getElementById("image-view");
// var displayImages = document.getElementById("display-images");

const formatTypes = [
  "0",
  "00",
  "000",
  "0000",
  "00000",
  "000000",
  "0000000",
  "00000000",
  "000000000",
  "0000000000",
];

const fileTypes = [".png", ".jpg"];

const prefixField = document.getElementById("input-prefix-type");
const formatField = document.getElementById("format-type");
const fileTypeField = document.getElementById("file-type");
const imageNameOutput = document.getElementById("image-name-output");
const inputStores = [];
let word1 = "";
let word2 = "";
let word3 = "";

// NOTE Functionality for user to display the naming style they want to rename images.

imageNameOutput.innerText = "...";

prefixField.onchange = (e) => {
  word1 = e.target.value;
  imageNameOutput.innerText = word1 + word2 + word3;
};

formatField.onchange = (e) => {
  word2 = e.target.value;
  imageNameOutput.innerText = word1 + word2 + word3;
};

fileTypeField.addEventListener("click", (e) => {
  word3 = e.target.value;
  imageNameOutput.innerText = word1 + word2 + word3;
});

// NOTE Functionality for uploading images from a users file

// document.getElementById("file-input").onchange = function (e) {
//   var file = e.target.files[0];
//   if (file && file.name) {
//     EXIF.getData(file, function () {
//       var data = this.exifdata;
//       var image = `
//                 <li style="display: flex; background-color: #f7f7f7">
//                     <p style="padding: 20px; margin: 0; width: 200px; height: 200px;">${
//                       1 + "."
//                     }</p>
//                     <div style="padding: 20px; object-fit: cover;">
//                         <img width="${data["PixelYDimension"] * 0.1}" height="${
//         data["PixelXDimension"] * 0.1
//       }"  src="${URL.createObjectURL(file)}" alt="${file.name}">
//                     </div>
//                     <p style="padding: 20px; margin: 0; width: 200px; height: 200px;">${
//                       file.name
//                     }</p>
//                 </li>`;
//       displayImages.innerHTML = image;
//     });
//   }
// };
