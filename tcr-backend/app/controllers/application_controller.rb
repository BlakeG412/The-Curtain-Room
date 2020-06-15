class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    # rescue_from Exception, :with => :render_error_response

    # def render_error_response(error)
    #     render json: error
    # end

    # def current_user
    #     begin
    #         method, token = request.headers[:Authorization].split(' ')
    #         if method === 'Bearer'
    #             payload, header = JWT.decode(token, 'Admin123')
    #             return User.find(payload["id"])
    #         end
    #     rescue
    #         raise Exception.new('You must be logged in to make this request')
    #     end
    # end
    # before_action :check_authentication

    # def encode_token(payload)
    #     JWT.encode(payload, "Admin123", "HS256")
    # end

    # def auth_header
    #     # { 'Authorization': 'Bearer <token>' }
    #     request.headers['Authorization']
    #     # byebug
    #   end
    
    #   def current_user
    #     # byebug
    #     if decoded_token
    #     # byebug
    #       user_id = decoded_token["user_id"]
  
    #       User.find(user_id)
    #     end
    #   end

    #   def decoded_token
    #     # token => "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
    #    if auth_header
    #      token = auth_header.split(' ')[1]
    #        puts token
    #      begin
    #       JWT.decode(token,"Admin123")[0] #pass the same key
    #        # JWT.decode => [{ "user_id"=>"18" }, { "alg"=>"HS256" }]
    #        # [0] gives us the payload { "user_id"=>"18" }
    #      rescue JWT::DecodeError
    #        nil
    #      end
    #    end
    #  end
   
    #  def check_authentication
    #    render json: { error: 'Please log in' }, status: 401 if !logged_in?
    #  end
   
    #  def logged_in?
    #    !!current_user
    #  end

end
