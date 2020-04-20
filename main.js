$(document).ready(function() {

});



var messageInput = $('.message-input');
var sendIcon = $('.footer-icons.send i');
var testoMessaggioBot = "Ok"


messageInput.on('focus blur', function(){
  sendIcon.toggleClass('fa-microphone fa-paper-plane');
})




sendIcon.click(function() {
    sendMessage(messageInput);
    setTimeout(function () {

          var testoBot = "Ok"

              var nuovoMessaggioBot = $('.template .message').clone();

              nuovoMessaggioBot.children('.message-text').text("Ok");

              console.log(testoMessaggioBot);


              nuovoMessaggioBot.addClass('text-received');


              $('.text-container').append(nuovoMessaggioBot);

      console.log(nuovoMessaggioBot)

              input.val('');
    }, 1000);
});


messageInput.keypress(function(e) {
    if(e.which == 13) {
        sendMessage(messageInput);
        setTimeout(function () {
              var testoBot = "Ok"
                  var nuovoMessaggioBot = $('.template .message').clone();
                  nuovoMessaggioBot.children('.message-text').text("Ok");
                  console.log(testoMessaggioBot);
                  nuovoMessaggioBot.addClass('text-received');
                  $('.text-container').append(nuovoMessaggioBot);
          console.log(nuovoMessaggioBot)
                  input.val('');
        }, 1000);
    }
});



function sendMessage(input) {

    var testoMessaggio = input.val().trim();

    if(testoMessaggio.length > 0) {

        var nuovoMessaggio = $('.template .message').clone();

        nuovoMessaggio.children('.message-text').text(testoMessaggio);

        console.log(testoMessaggio);


        nuovoMessaggio.addClass('text-sent');


        $('.text-container').append(nuovoMessaggio);

console.log(nuovoMessaggio)

        input.val('');
    }
}
