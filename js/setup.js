let perms = document.getElementById('listOfPermissions');

let reset = document.getElementById('reset');

let writePerm = document.getElementById('writeSettings');

perms.addEventListener('itemSelected', function () {
    try {
        if(perms.getAttribute('value') == 'customize') {
            window.location.href = '../html/Customize.html';
        }
        
        window.AppInventor.setWebViewString(perms.getAttribute('value'));
    } catch (e) { }
});

let int = window.setInterval(function () { // checks for any messages sent from the app.
    try {
        console.log(window.AppInventor.getWebViewString())
        if (JSON.parse(window.AppInventor.getWebViewString())['canWriteSettings']) {
            writePerm.setAttribute('disabled', 'true');
            clearInterval(int);
        }
    } catch (e) {
        console.error(e);
    }
}, 1000);

reset.addEventListener('click', function () {
    try {
        if (confirm('Are you sure you want to restart setup?')) {
            window.AppInventor.setWebViewString('restart');
        }
    } catch (e) { }
});