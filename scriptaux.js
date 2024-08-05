
document.getElementById('sin_gluten').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('page-content').classList.add('active');
    history.pushState(null, '', '/sin-gluten');
});

window.addEventListener('popstate', function(event) {
    if (location.pathname === '/sin-gluten') {
        document.getElementById('page-content').classList.add('active');
    } else {
        document.getElementById('page-content').classList.remove('active');
    }
});
