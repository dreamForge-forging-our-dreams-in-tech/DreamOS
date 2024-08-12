let perms = document.getElementById('listOfPermissions');

let writePerm = document.getElementById('writeSettings');

perms.addEventListener('itemSelected', function () {
    try {
    window.AppInventor.setWebViewString(perms.getAttribute('value'));
    } catch (e) {}
});

window.setInterval(function () { // checks for any messages sent from the app.
    try {
        alert(window.AppInventor.getWebViewString()['canWriteSettings'])
        if(window.AppInventor.getWebViewString()['canWriteSettings']) {
            writePerm.setAttriute('disabled', 'true');
        }
    } catch(e) {
        alert(e)
    }
},1);