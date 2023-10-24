require 'rails_helper'

RSpec.describe User, type: :model do
  it 'should not save user without username' do
    user = User.new
    expect(user.valid?).to eq false
  end

  it 'should save user with valid attributes' do
    user = User.new(username: 'toyman', email: 'falako@mail.com', password: 'toyman123', password_confirmation: 'toyman123')
    expect(user.valid?).to eq true
  end


end
