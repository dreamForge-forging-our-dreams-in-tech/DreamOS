let perms = document.getElementById('listOfPermissions');

perms.addEventListener('itemSelected', function () {
    alert()
    try {
    window.AppInventor.setWebViewString(perms.getAttribute('value'));
    } catch (e) {}
});