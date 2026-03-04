class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :church

  validates :user_id, :church_id, :amount, presence: :true
  validates :amount, numericality: { greater_than: 0, less_than: 10000,
    only_integer: true }

end
