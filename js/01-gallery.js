import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryListEl = document.querySelector(".gallery");

const imageArr = galleryItems
  .map((image) => {
    return `<li class = "gallery__item" > <a  href= "${image.original}" class="gallery__link" ><img class = "gallery__image" src = "${image.preview}" data-source="${image.original}" alt = "${image.description}"></a></li>`;
  })
  .join("");
galeryListEl.insertAdjacentHTML("beforeend", imageArr);
const galeryItemEl = document.querySelector(".gallery__item");
galeryListEl.addEventListener("click", onImageClick);

function onImageClick(evt) {
  blockStandartAction(evt);
  if (evt.target.tagName !== "IMG") {
    return;
  }

  const instance =
    basicLightbox.create(` <img src = "${evt.target.dataset.source}" width = "800" height="600">
`);
  instance.show();

  galeryListEl.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandartAction(evt) {
  evt.preventDefault();
}
