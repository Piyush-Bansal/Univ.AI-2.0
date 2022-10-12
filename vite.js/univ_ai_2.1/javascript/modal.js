let modalBg = document.querySelector(".modal__bg");
let openModal = document.querySelector("#open-modal");
let closeModal = document.querySelector(".modal__ico");

openModal.addEventListener("click", () => {
  console.log("press");
  scrollFreezeModal();
  modalBg.style.display = "flex";

  gsap.fromTo(
    ".modal",
    { x: "100%" },
    { x: "0%", duration: 0.6, ease: "Power3.easeInOut" }
  );
});

closeModal.addEventListener("click", closeM);

function scrollFreezeModal() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
}

function closeM() {
  let modalTl = gsap.timeline();
  modalTl
    .to(".modal", {
      x: "100%",
      duration: 0.4,
      ease: "Power3.easeIn",
    })
    .set(modalBg, {
      display: "none",
    })
    .set("body", {
      overflow: "visible",
    });
}
