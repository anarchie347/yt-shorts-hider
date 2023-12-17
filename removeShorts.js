const shortsElementName = 'ytd-rich-section-renderer';
hideElements(shortsElementName);

function hideElements(elementName) {
    const elements = document.getElementsByTagName(elementName);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}