const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// images.forEach((image) => {
//   let listEl = document.createElement("img");
//   listEl.src = image.url;
//   listEl.alt = image.alt;
//   document.querySelector("ul.gallery").appendChild(listEl);
// });

const gallery = document.querySelector(".gallery");

const galleryItems = images
  .map(
    (image) =>
      `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width="300"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItems);
