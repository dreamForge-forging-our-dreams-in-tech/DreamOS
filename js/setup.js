let perms = document.getElementById('listOfPermissions');

perms.addEventListener('click', function () {
    try {
    window.AppInventor.setWebViewString(perms.getAttribute('value'));
    } catch (e) {}
});