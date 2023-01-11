import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item"> <a class="gallery__link" href=${item.original}>
    <img class="gallery__image" src =${item.preview} data-source=${item.original} 
    alt="${item.description}" />
    </a>
    </div>`
  );
});

gallery.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" 
  width="1280" height="720">`);
  instance.show();

  document.addEventListener("keydown", function escape(e) {
    if (e.keyCode === 27) {
      instance.close();
      document.removeEventListener("keydown", escape);
      console.log("closing on esc");
    }
  });
});
