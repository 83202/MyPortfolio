// Wait until the window has finished loading
window.onload = function () {
    // Hide the loader
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
    
    // Show the content
    const content = document.getElementById('content');
    content.style.display = 'block';
};


window.addEventListener("load", function() {
    document.getElementById('loader').style.display = 'none'; // Hide loader after loading

    // Optionally, change the favicon after loading (if you want to)
    document.querySelector("link[rel='preload']").setAttribute("href", "favicon.ico");
});
