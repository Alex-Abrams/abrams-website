class Api::UsersController < ApplicationController
  def create
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages

    end
  end

private

  def user_params
    params.require(:user).permit(:usernmae, :password, :email)
  end
end
