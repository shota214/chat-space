$(function(){
  function buildHTML(message) {
    var image = message.image.url == null ? "" : `<img src="${message.image.url}" class="lower-message__image">`

    var html = `<div class='message'>
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

  $("#new_message").on('submit',function(){
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
      var html = buildHTML(message)
      $('.messages').append(html)
      $('#message_content').val("")
      $('#message_image').val("")
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('messageか画像を入力してください')
    })

    return false;
  })
}); 