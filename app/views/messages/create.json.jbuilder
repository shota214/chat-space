json.user_name @message.user.name
json.content @message.content
json.date @message.created_at.strftime("%Y/%m/%d(#{%w(Sun Mon Tue Wed Thu Fri Sat)[Time.now.wday]}) %H:%M")
json.image @message.image.url
json.id @message.id