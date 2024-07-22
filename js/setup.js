let perms = document.getElementById('listOfPermissions');

perms.addEventListener('click', function () {
    window.AppInventor.setWebViewString(perms.getAttribute('value'));
});