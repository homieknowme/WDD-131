
const themeSelector = document.querySelector("#themeSelector");
const body = document.body; 
const logoImage = document.querySelector("#logo img"); 


function changeTheme() {
    
    if (themeSelector.value === "dark") {
        
        body.classList.add("dark");
        
        logoImage.src = "https://cdn.glitch.global/f524dc8c-116d-459e-bd13-cfee38deab97/byui-logo_white.png?v=1737791976866";
    } else {
       
        body.classList.remove("dark");
        
        logoImage.src = "https://cdn.glitch.global/f524dc8c-116d-459e-bd13-cfee38deab97/byui-logo_blue.webp?v=1737781973050";
    }
}


themeSelector.addEventListener('change', changeTheme);