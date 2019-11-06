class AuthenticationController < ApplicationController
  before_action :authorize_request, except: [:login, :signup]

  def login
    return render_missing_params if missing_login_params?

    if user.authenticate(params[:password])
      render json: { token: token, exp: token_expiration,
                     email: user.email }, status: :ok
    else
      render json: { error: 'Incorrect Password' }, status: :unauthorized
    end
  end

  def signup
    return render_missing_params if missing_signup_params?
    return render_password_mismatch if password_mismatch?

    user = create_user!
    render json: { email: user.email, token: token }, status: 201
  end

  private

  def user
    User.find_by(email: email)
  end

  def email
    params[:email]
  end

  def create_user!
    User.create!(sign_up_params)
  end

  def token
    Jwt.encode(user_id: user.id)
  end

  def token_expiration
    (Time.now + 24.hours.to_i).strftime("%m-%d-%Y %H:%M")
  end

  def sign_up_params
    params.permit(:email, :password, :password_confirmation)
  end

  def password_mismatch?
    params[:password] != params[:password_confirmation]
  end

  def missing_signup_params?
    !params.has_key?(:email) ||
    !params.has_key?(:password) ||
    !params.has_key?(:password_confirmation)
  end

  def missing_login_params?
    !params.has_key?(:email) ||
    !params.has_key?(:password)
  end

  def render_missing_params
    render json: { error: "email and password must be present"}, status: :unprocessable_entity
  end

  def render_password_mismatch
    render json: { error: "passords must match" }, status: :unprocessable_entity
  end

  def render_email_taken
    render json: {error: "email has been taken"}, status: :unprocessable_entity
  end
end
