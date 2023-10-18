class Api::V1::ReservationController < ApplicationController
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
    @reservation = Reservation.new(reservation_params.merge(user_id: params[:user_id], doctor_id: params[:doctor_id]))
    if @reservation.save
      render json: @reservation, status: :created
    else
      render json: @reservation.errors.full_messages, status: :bad_request
    end
  end

  def update
    @reservation = Reservation.find(params[:id])
    if @reservation.update(reservation_params)
      render json: 'reservation updated successfully'
    else
      render json: @reservation.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation.destroy
      render json: 'appontment deleted succesfully'
    else
      render json: @reservation.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:id, :user_id, :doctor_id, :city, :reservation_time)
  end
end
