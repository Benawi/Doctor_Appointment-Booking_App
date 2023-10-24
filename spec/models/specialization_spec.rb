require 'rails_helper'

RSpec.describe Specialization, type: :model do

  it 'should save Specialization with valid attributes' do
    specialization = Specialization.new(name: 'Gynecologist', )
    expect(specialization.valid?).to eq true
  end

  it 'should save user with valid attributes' do
    specialization = Specialization.new(name: 'Gynecologist', )
    expect(specialization.name).to eq 'Gynecologist'
  end
end
