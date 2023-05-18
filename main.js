// Enchant the form submission for the proxy
document.querySelector('form[action="/proxy"]').addEventListener('submit', function (event) {
    event.preventDefault();
    const url = document.querySelector('input[name="url"]').value;
    if (url) {
        window.location.href = '/proxy?url=' + encodeURIComponent(url);
    }
});

// Unleash the magic of the form submission for the tab cloaker
document.querySelector('form[action="/cloaker"]').addEventListener('submit', function (event) {
    event.preventDefault();
    const url = document.querySelector('input[name="url"]').value;
    if (url) {
        window.location.href = '/cloaker?url=' + encodeURIComponent(url);
    }
});
