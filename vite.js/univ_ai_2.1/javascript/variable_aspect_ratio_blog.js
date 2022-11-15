const blogCardWrapper = document.querySelectorAll(".blog-card-wrapper");
const totalBlogWrappers = Math.ceil(blogCardWrapper.length / 2) + 1;

//select every first item
for (let i = 1; i < totalBlogWrappers; i++) {
  const imgWrapper =
    blogCardWrapper[0 + (i - 1) * 2].querySelector(".img-wrapper");
  imgWrapper.classList.add(
    "aspect-ratio-1-1",
    "aspect-ratio-t-1-1",
    "aspect-ratio-m-4-3"
  );
  imgWrapper
    .querySelector(".card__image")
    .classList.add(
      "aspect-ratio-1-1",
      "aspect-ratio-t-1-1",
      "aspect-ratio-m-4-3"
    );
}

//select every second item
for (let i = 1; i < totalBlogWrappers; i++) {
  const imgWrapper =
    blogCardWrapper[1 + (i - 1) * 2].querySelector(".img-wrapper");
  imgWrapper.classList.add(
    "aspect-ratio-4-3",
    "aspect-ratio-t-4-3",
    "aspect-ratio-m-4-3"
  );
  imgWrapper
    .querySelector(".card__image")
    .classList.add(
      "aspect-ratio-4-3",
      "aspect-ratio-t-4-3",
      "aspect-ratio-m-4-3"
    );

  if (window.innerWidth < 1023) {
    document
      .querySelectorAll(".blog-card-wrapper")
      [1 + (i - 1) * 2].querySelector(".separator")
      .classList.add("hide");
  }
}

//select every fourth item
for (let i = 1; i < totalBlogWrappers; i++) {
  document
    .querySelectorAll(".blog-card-wrapper")
    [3 + (i - 1) * 4].querySelector(".separator")
    .classList.add("hide");

  if (window.innerWidth < 1023) {
    document
      .querySelectorAll(".blog-card-wrapper")
      [3 + (i - 1) * 4].querySelector(".separator")
      .classList.add("hide");
  }
}
