import {message} from "./generator"
var msg= false;
$( document ).ready(function() {
    console.log( "ready!" );
    let button= $("button.btn");
    let messageBox= $("div.messageBox");
    button.click(function(e){
        e.preventDefault();
        let type= $(this).data('val');
        msg= message(type);
        messageBox.html(msg)
    })
});