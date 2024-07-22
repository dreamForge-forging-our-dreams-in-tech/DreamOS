let perms = document.getElementById('listOfPermissions');

perms.addEventListener('itemSelected', function () {
    try {
    window.AppInventor.setWebViewString(perms.getAttribute('value'));
    } catch (e) {}
});