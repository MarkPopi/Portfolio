window.onload = function () {
    let currentTheme = "default-theme";
    const themeSelector = document.getElementById("theme-selector");

    themeSelector.addEventListener('change', function(e) {
        const newTheme = e.currentTarget.value;
        setTheme(currentTheme, newTheme);
    });

    function setTheme(oldTheme, newTheme) {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove(oldTheme);
        body.classList.add(newTheme);
        currentTheme = newTheme;
    }
};