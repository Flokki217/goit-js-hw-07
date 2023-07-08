import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryListEl = document.querySelector(".gallery");

const imageArr = galleryItems
  .map((image) => {
    return `<li class = "gallery__item" > <a  href= "${image.original}" class="gallery__link" ><img class = "gallery__image" src = "${image.preview}" data-source="${image.original}" alt = "${image.description}"></a></li>`;
  })
  .join("");
galeryListEl.insertAdjacentHTML("beforeend", imageArr);

galeryListEl.onclick = (evt) => {
  if (evt.target.tagName !== "IMG") {
    return;
  }
  evt.preventDefault();
  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  function closeModal(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  }
};
