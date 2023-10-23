class Api::V1::UsersController < ApplicationController
  def index
    @users = User.order('created_at desc')
    if @users
      render json: @users, status: :ok
    else
      render json: 'No users found', status: 404
    end
  end

  def show
    @user = User.find_by(name: params[:name])
    if @user
      render json: @user, status: :ok
    else
      render json: 'No users found!', status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: { status: 'SUCCESS', data: @user, message: 'Doctor successfully created' }, status: :ok
    else
      render json: @user.errors.full_messages, status: 500
    end
  end

  def destroy
    @user = User.find_by_id(params[:id])
    if @user.destroy
      render json: 'User Successfully deleted', status: :ok
    else
      render json: 'unable to delete the user!', status: unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: 'User profile updated successfully', status: :ok
    else
      render json: 'unable to update user', status: unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :username, :email)
  end
end
