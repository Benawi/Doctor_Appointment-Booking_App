class Api::V1::SpecializationsController < ApplicationController
  def index
    @specializations = Specialization.all
    if @specializations
      render json: @specializations, status: :ok
    else
      render json: @specializations.errors.full_messages, status: :bad_request
    end
  end
end
