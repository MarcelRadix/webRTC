const displayPageWelcome = ()=> {
    document.getElementById("content").innerHTML=`
    <h1>Chatbox</h1>

    <div id="main">
        <div class="intro"><p>On this website you'll find an video chatbox. This chatbox is part of an school project. Please note that this just for demonstration purposes.</p></div>
        <div class="username"><label>Please enter your nickname:</label><input id="name" autocomplete="on" />
        <a href="#" id="signin" class="signin">Enter the chatroom!</a><div>
    </div>
    `;
};

const displayPageChat = ()=> {

    document.getElementById("content").innerHTML=`

        <div id="container">
            <div id="videos">
                <video id="localvid" autoplay></video>
                <video id="remotevid" autoplay></video>
            </div>
            <div id="chat">
                <h1>Chatbox</h1>
                <ul id="messages"></ul>
                <form action="">
                    <input id="m" autocomplete="off" /><button class="signin">Send</button>
                </form>
            </div>
        </div>
    `;
};

    
