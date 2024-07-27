const themes = ['styles/styles_2000s.css', 'styles/styles_2010s.css'];
let currentThemeIndex = 0;
const themeStyle = document.getElementById('theme-style');
const body = document.body;

document.getElementById('theme-button').addEventListener('click', () => {
    // Add fade-out class
    body.classList.add('fade-out');
    
    // Wait for the fade-out animation to complete
    setTimeout(() => {
        // Switch the theme
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        themeStyle.setAttribute('href', themes[currentThemeIndex]);
        
        // Remove fade-out class and add fade-in class
        body.classList.remove('fade-out');
        body.classList.add('fade-in');
    }, 500); // Match this to the duration of the fade-out animation
    
    // Remove the fade-in class after animation completes
    setTimeout(() => {
        body.classList.remove('fade-in');
    }, 1000); // Total duration for fade-out + fade-in
});