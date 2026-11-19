export function dataformel(formel) {
    return new Promise((resolve) => {
        formel.addEventListener("submit", (e) => {
            e.preventDefault();
            const formelvaleur = {
                NAME: document.getElementById("nomprojet").value.trim(),
                NUMDAYS: document.getElementById("duree").value.trim(),
                NUMDEVELOPERS: document.getElementById("selectnumber").value.trim(),
                TECHNOLOGIES: document.getElementById("inpttechno").value.trim(),
                DIFFICULTYLEVEL: document.getElementById("niveauselect").value.trim(),
                DESCRIPTION: document.getElementById("descrip").value.trim(),
                BRIEF: document.getElementById("textbreif").value.trim()
            };
            resolve(formelvaleur);
        });
    });
}
