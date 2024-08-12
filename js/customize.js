let perms = document.getElementById('listOfPermissions');

let reset = document.getElementById('reset');


perms.addEventListener('itemSelected', function () {
    try {
        if (perms.getAttribute('value') == 'wallpaper') {
            setWallpaper();

        }
    } catch (e) { }
});

let int = window.setInterval(function () { // checks for any messages sent from the app.
    try {
        console.log(window.AppInventor.getWebViewString())
        if (JSON.parse(window.AppInventor.getWebViewString())['canWriteSettings']) {
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

async function setWallpaper() {
    let fileHandle;

    const pickerOpts = {
        types: [
          {
            description: "Images",
            accept: {
              "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            },
          },
        ],
        excludeAcceptAllOption: true,
        multiple: false,
      };

    // open file picker, destructure the one element returned array
    fileHandle = await window.showOpenFilePicker(pickerOpts);
    console.log(fileHandle);

    // run code with our fileHandle
}