var elems = document.getElementByTagName('*'); // Get all the elements (*);

for (const [key, value] of Object.entries(elems))
{
    var newFontSize = Math.floor(Math.random() * 40);
    value.style.fontSize = newFontSize ;
}