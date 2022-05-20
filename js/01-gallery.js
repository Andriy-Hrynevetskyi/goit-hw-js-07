import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

let image = {};

function onGalleryOpenEscPress(event) {
  if (event.code === "Escape" && basicLightbox.visible()) {
    image.close();
  }
}

function onGalleryItemClick(event) {
  event.preventDefault();
  image = basicLightbox.create(
    `
      <img src=${event.target.dataset.source} >
`,
    {
      onShow: (image) => {
        window.addEventListener("keydown", onGalleryOpenEscPress);
      },
      onClose: (image) => {
        window.removeEventListener("keydown", onGalleryOpenEscPress);
      },
    }
  );
  image.show();
}

gallery.addEventListener("click", onGalleryItemClick);
