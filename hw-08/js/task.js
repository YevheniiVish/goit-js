"use strict";
import gallerryItems from "./gallery-items.js";
const galerryList = document.querySelector(".js-gallery");

class Gallery {
  constructor(gallerryItems, galleryList) {
    this.gallerryItems = gallerryItems;
    this.galleryList = galleryList;
    this.lightBox = document.querySelector(".js-lightbox");
    this.lightBoxImg = document.querySelector(".lightbox__image");
    this.__OpenGalleryItem();
    this.__AddGallery();
    this.__CloseButton();
    this.__CloseClick();
    this.__CloseEsc();
    this.__ShowOriginalItems();
  }

  __BuildGalleryItem() {
    return this.gallerryItems
      .map(({ preview, original, description }) => {
        return `<li class = "gallery__item"> <a class="gallery__link" href="${original}">
      <img src="${preview}" data-source="${original}" alt="${description}">
     </a></li>`;
      })
      .join("");
  }
  __AddGallery() {
    this.galleryList.insertAdjacentHTML(
      "afterbegin",
      this.__BuildGalleryItem()
    );
  }
  __OpenGalleryItem() {
    this.galleryList.onclick = function (event) {
      return false;
    };
    this.galleryList.addEventListener("click", (event) => {
      this.lightBox.classList.add("is-open");
      this.lightBoxImg.src = event.target.dataset.source;
    });
  }
  __CloseButton() {
    const button = document.querySelector(".lightbox__button");
    button.addEventListener("click", (event) => {
      this.lightBox.classList.remove("is-open");
      this.lightBoxImg.src = "";
    });
  }
  __CloseClick() {
    const overlay = document.querySelector(".lightbox__content");
    overlay.addEventListener("click", (event) => {
      if (event.target === this.lightBoxImg) return;
      this.lightBox.classList.remove("is-open");
      this.lightBoxImg.src = "";
    });
  }
  __CloseEsc() {
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      this.lightBox.classList.remove("is-open");
      this.lightBoxImg.src = "";
    });
  }
  __ShowOriginalItems() {
    document.addEventListener("keydown", (event) => {
      let idx = this.gallerryItems.indexOf(
        this.gallerryItems.find(
          (item) => item.original === this.lightBoxImg.src
        )
      );
      if (event.key === "ArrowRight") {
        idx += 1;
      }
      if (event.key === "ArrowLeft") {
        idx -= 1;
      }
      if (idx < 0 || idx >= this.gallerryItems.length) {
        return;
      }
      this.lightBoxImg.src = this.gallerryItems[idx].original;
    });
  }
}

new Gallery(gallerryItems, galerryList);
