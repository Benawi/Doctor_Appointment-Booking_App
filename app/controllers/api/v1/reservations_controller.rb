class Api::V1::ReservationsController < ApplicationController
  def index
    @reservations = Reservation.order('created_at desc')
    if @reservations
      render json: @reservations, status: :ok
    else
      render json: @reservations.errors.full_messages, status: :bad_request
    end
  end

  def show
    @reservation = Reservation.where(id: params[:id])
    if @reservation
      render json: @reservation, status: :ok
    else
      render json: @reservation.errors.full_messages, status: :bad_request
    end
  end

  def create
    @reservation = Reservation.new(reservation_params.merge(doctor_id: params[:doctor_id]))

    # Assuming you have an authentication system, set the user_id to the current user's ID
    @reservation.user_id = current_user.id

    if @reservation.save
      render json: @reservation, status: :created
    else
      render json: { errors: @reservation.errors.full_messages }, status: :bad_request
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:doctor_id, :reservation_time)
  end
end
