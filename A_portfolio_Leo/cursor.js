
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("hover"); // Ajoutez la classe hover pour agrandir le curseur
    });
    link.addEventListener("mouseout", () => {
        cursor.classList.remove("hover"); // Retirez la classe hover pour réduire le curseur à sa taille d'origine
    });
});

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block"; // Afficher le curseur lorsque la souris se déplace
});

// Gérer le redimensionnement de la fenêtre du navigateur
window.addEventListener("resize", () => {
    // Récupérer la position de la souris
    let x = event.clientX;
    let y = event.clientY;

    // Mettre à jour la position du curseur en fonction de la nouvelle taille de la fenêtre du navigateur
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});

document.addEventListener("mouseout", (e) => {
    cursor.style.display = "none";
})

