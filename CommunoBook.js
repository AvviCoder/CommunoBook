
var settingsMenu = document.querySelector(".settings-menu");

var darkbtn = document.getElementById("dark-button");
function settingsMenuToggle()
{
    settingsMenu.classList.toggle("settings-menu-height");
}

darkbtn.onclick = function()
{
    darkbtn.classList.toggle("dark-button-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light")
    {
        localStorage.setItem("theme", "dark");
    }
    else
    {
        localStorage.setItem("theme", "light");
    }
}

// using the concept of local storage for storing 
// or to make the color of the theme to be static
if(localStorage.getItem("theme") == "light")
{
    darkbtn.classList.remove("dark-button-on");
    document.body.classList.toggle("dark-theme");    
}
else if(localStorage.getItem("theme") == "light")
{
    darkbtn.classList.add("dark-button-on");
    document.body.classList.add("dark-theme"); 
}
else
{
    localStorage.setItem("theme","light");
}

localStorage.setItem("theme", "dark");
localStorage.getItem("theme");
