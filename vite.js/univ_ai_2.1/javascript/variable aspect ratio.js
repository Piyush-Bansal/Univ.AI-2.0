// grab all image wrappers
const variableWrappers = document.querySelectorAll(
  ".card-wrapper .img-wrapper"
);

//add aspect ratio classes to each

variableWrappers[0].classList.add(
  "aspect-ratio-3-4",
  "aspect-ratio-t-1-1",
  "aspect-ratio-m-4-3"
);
variableWrappers[0]
  .querySelector(".card__image")
  .classList.add(
    "aspect-ratio-3-4",
    "aspect-ratio-t-1-1",
    "aspect-ratio-m-4-3"
  );

variableWrappers[1].classList.add(
  "aspect-ratio-4-3",
  "aspect-ratio-t-16-9",
  "aspect-ratio-m-4-3"
);
variableWrappers[1]
  .querySelector(".card__image")
  .classList.add(
    "aspect-ratio-4-3",
    "aspect-ratio-t-16-9",
    "aspect-ratio-m-4-3"
  );

variableWrappers[2].classList.add(
  "aspect-ratio-3-4",
  "aspect-ratio-t-1-1",
  "aspect-ratio-m-4-3"
);
variableWrappers[2]
  .querySelector(".card__image")
  .classList.add(
    "aspect-ratio-3-4",
    "aspect-ratio-t-1-1",
    "aspect-ratio-m-4-3"
  );

variableWrappers[3].classList.add(
  "aspect-ratio-1-1",
  "aspect-ratio-t-4-3",
  "aspect-ratio-m-4-3"
);
variableWrappers[3]
  .querySelector(".card__image")
  .classList.add(
    "aspect-ratio-1-1",
    "aspect-ratio-t-4-3",
    "aspect-ratio-m-4-3"
  );

document
  .querySelectorAll(".card-wrapper")[3]
  .querySelector(".separator")
  .classList.add("hide");

if (window.innerWidth < 1023) {
  document
    .querySelectorAll(".card-wrapper")[1]
    .querySelector(".separator")
    .classList.add("hide");
  document
    .querySelectorAll(".card-wrapper")[3]
    .querySelector(".separator")
    .classList.add("hide");
}
