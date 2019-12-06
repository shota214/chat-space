$(function(){
  function buildHTML(message) {
    var image = message.image == null ? "" : `<img src="${message.image}" class="lower-message__image">`

    var html = `<div class='message'data-message-id="${message.id}">
            <div class='upper-message'>
              <div class='upper-message__user-name'>
                ${message.user_name}
              </div>
              <div class='upper-message__date'>
                ${message.date}
              </div>
            </div>
            <div class='lower-message'>
              <p class='lower-message__content'>
                ${message.content}
              </p>
                ${image}
            </div>
          </div>`
    return html;
  }

  $("#new_message").on('submit',function(e){
     e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $("#new_message")[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    
    .fail(function(){
      alert('messageか画像を入力してください')
      $('.form__submit').prop('disabled', false);
    });
  });

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data('message-id');
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })

    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
        insertHTML += buildHTML(message);
      })
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    
    .fail(function() {
      alert('error');
      }); 
    }; 
  };
    setInterval(reloadMessages, 7000);
});