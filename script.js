document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-container img");

    images.forEach(image => {
        image.addEventListener("click", () => {
            const modal = document.createElement("div");
            modal.classList.add("modal");

            const modalImage = document.createElement("img");
            modalImage.src = image.src;
            modalImage.alt = image.alt;

            const closeModal = document.createElement("span");
            closeModal.textContent = "×";
            closeModal.classList.add("close-modal");

            modal.appendChild(modalImage);
            modal.appendChild(closeModal);
            document.body.appendChild(modal);

            closeModal.addEventListener("click", () => {
                modal.remove();
            });

            modal.addEventListener("click", (e) => {
                if (e.target === modal) modal.remove();
            });
        });
    });
});
