# app/controllers/sessions_controller.rb
class SessionsController < Devise::SessionsController
  protect_from_forgery with: :null_session
  def destroy
    sign_out(current_user) # For Devise, sign the user out
    # If using token-based authentication, invalidate the token here
    redirect_to new_user_session_path # Redirect to the login page
  end
end
