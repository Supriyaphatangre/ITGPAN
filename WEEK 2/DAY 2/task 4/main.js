let selection = document.querySelector('select');

selection.addEventListener('change',()=>{
    result.innertext=selection.options[selection.selectedIndex].text;
});