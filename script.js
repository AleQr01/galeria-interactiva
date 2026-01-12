const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImage");
const deleteImageBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

addImageBtn.addEventListener("click", () => {
    const url = imageUrlInput.value;

    if (url === "") {
        alert("Ingrese una URL válida");
        return;
    }

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => {
        seleccionarImagen(img);
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

function seleccionarImagen(img) {
    document.querySelectorAll(".gallery img").forEach(imagen => {
        imagen.classList.remove("selected");
    });

    img.classList.add("selected");
    selectedImage = img;
}

deleteImageBtn.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    } else {
        alert("Seleccione una imagen");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Delete" && selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});
