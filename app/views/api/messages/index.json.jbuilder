json.array! @messages do |message|
  json.content message.content
  json.image message.image.url
  json.date message.created_at.strftime("%Y/%m/%d(#{%w(Sun Mon Tue Wed Thu Fri Sat)[Time.now.wday]}) %H:%M")
  json.user_name message.user.name
  json.id message.id
end