class Api::V1::DoctorsController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    @doctors = Doctor.includes(:reservations, :specialization).order('created_at desc')
    if @doctors
      render json: @doctors, methods: [:specialization_name], status: :ok
    else
      render json: @doctors.errors.full_messages, status: :bad_request
    end
  end

  def show
    @doctor = Doctor.where(uuid: params[:uuid])
    if @doctor
      render json: @doctor, status: :ok
    else
      render json: @doctor.errors.full_messages, status: :bad_request
    end
  end

  def create
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      render json: { status: 'SUCCESS', data: @doctor, message: 'Doctor successfully created' }, status: :created
    else
      render json: { status: 'ERROR', errors: @doctor.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @doctor = Doctor.find_by(uuid: params[:uuid])
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
    params.require(:doctor).permit(:id, :uuid, :name, :bio, :photo, :specialization_id)
  end
end
