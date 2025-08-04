const gallery = document.getElementById("gallery");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let index = 0;
const total = gallery.children.length;

function updateGallery() {
  gallery.style.transform = `translateX(-${index * 100}%)`;
}

leftBtn.onclick = () => {
  index = (index - 1 + total) % total;
  updateGallery();
};

rightBtn.onclick = () => {
  index = (index + 1) % total;
  updateGallery();
};
