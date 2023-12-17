const shortsElementName = 'ytd-rich-section-renderer';
hideElements(shortsElementName, 2000);

function hideElements(elementName, delay) {
    setTimeout(() => {
        const elements = document.getElementsByTagName(elementName);
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
    }, delay);

}