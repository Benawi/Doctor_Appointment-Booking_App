class Api::V1::DoctorsController < ApplicationController
  def index
    @doctors = Doctor.includes(:reservations).order('created_at desc')
    if @doctors
      render json: @doctors, status: :ok
    else
      render json: @doctors.errors.full_messages, status: :bad_request
    end
  end

  def show
    @doctor = Doctor.where(id: params[:id]).includes(:reservations)
    if @doctor
      render json: @doctor, status: :ok
    else
      render json: @doctor.errors.full_messages, status: :bad_request
    end
  end

  def create
    @doctor = Doctor.new(doctor_params.merge(user_id: params[:user_id]))
    if @doctor.save
      render json: { status: 'SUCCESS', data: @doctor, message: 'Doctor successfully created' }, status: :created
    else
      render json: @doctor.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @doctor = Doctor.find(params[:id])
    if @doctor.destroy
      render json: { status: 'DELETED', message: 'Doctor deleted1 successfully', data: @doctor }, status: :ok
    else
      render json: @doctor.errors.full_messages, status: :bad_request
    end
  end

  def update
    @doctor = Doctor.where(id: params[:id]).includes(:reservations)
    if @doctor.update(doctor_params)
      render json: { success: 'UPDATED', data: @doctor, message: 'Doctor updated successfully' }, status: :ok
    else
      render json: { message: 'unable to update doctor' }, status: :unprocessable_entity
    end
  end

  def doctor_params
    params.require(:doctor).permit(:id, :user_id, :name, :bio, :photo, :specialization)
  end
end