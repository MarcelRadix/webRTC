(function() {
    'use strict';

    // Load Application
    const activateWelcome = () => {
        displayPageWelcome();

    // Setup event listener(s)
    const notandiNafn = document.querySelector('#name');

    notandiNafn.addEventListener("keyup", function(event){
        event.preventDefault();
        if (event.key=== 13) {
            document.getElementById("signin").click();
        }
    });

    document.querySelector('#signin').addEventListener('click', () => {
        displayPageOne(notandiNafn.value);
    });
};

    const displayPageOne = (n) => {
        console.log("Username: "+n);
        displayPageChat();
        enterTheRoom(n);
    };

    //Start the app
    activateWelcome();

})();