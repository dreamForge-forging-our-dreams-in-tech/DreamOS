let perms = document.getElementById('listOfPermissions');

let reset = document.getElementById('reset');

let writePerm = document.getElementById('writeSettings');

perms.addEventListener('itemSelected', function () {
    try {
        if(perms.getAttribute('value') == 'Customize NexOS') {
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
            window.AppInventor.setWebViewString('restart');
    } catch (e) { }
});