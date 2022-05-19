import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryItemMarkup(item) {
  return `<div class="gallery__item">
    <a class="gallery__link" href=${item.orginal}>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.orginal}
        alt=${item.description}
      />
    </a>
  </div>`;
}

function createGalleryMarkup(items) {
  return items.map((item) => createGalleryItemMarkup(item)).join("");
}

gallery.innerHTML = createGalleryMarkup(galleryItems);
