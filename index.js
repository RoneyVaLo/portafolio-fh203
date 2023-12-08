const openAccordion = (event) => {
    const currentElement = event.currentTarget;
    const currentContent = currentElement.querySelector(".content");
    const contents = document.querySelectorAll(".content");

    contents.forEach(week => {
        if (week !== currentContent) {
            week.classList.remove("showContent");
            week.style.maxHeight = 0 + "px";
        } else {
            week.classList.toggle("showContent")
        }
    });
    
    if (currentContent.classList.contains("showContent")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else currentContent.style.maxHeight = 0 + "px";
};


async function fetchDataAndRender() {
    try {
        const response = await fetch('classData.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }

        const data = await response.json();

        const htmlClasses = data.map(classData => classData.html).join('');
        
        const main = document.querySelector('main');
        main.innerHTML += htmlClasses;
    } catch (error) {
        console.error('Hubo un error:', error);
    }
}

fetchDataAndRender();
