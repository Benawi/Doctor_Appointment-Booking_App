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

  it 'should not save if user passwords do not match' do
    user = User.new(username: 'jane007', email: 'jane@mail.com', password: 'toyman12', password_confirmation: 'toyman123')
    expect(user.valid?).to eq false
  end

end
