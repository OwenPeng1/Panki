class CardSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer, :count
  has_one :category
  has_one :user
end
