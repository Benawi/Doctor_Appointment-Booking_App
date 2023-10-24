require 'rails_helper'

RSpec.describe User, type: :model do
  it 'should not save user without name' do
    user = User.new
    expect(user.valid?).to eq false
  end

end
