class Note < ApplicationRecord
  validates :title, prescence: :true
end