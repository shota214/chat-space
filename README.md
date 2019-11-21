## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group|integer|foreignkey: true|
|user|intege|foreignkey: true|
|timestamps|----|-------|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|encrypted_password|string|null: false|
|timestamps|----|-------|

### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|user|references|foreign_key: true|
|timestamps|----|-------|

### Association
- has_many :users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
