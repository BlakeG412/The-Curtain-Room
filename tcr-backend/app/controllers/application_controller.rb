class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    
    rescue_from Exception, :with => :render_error_response

    def render_error_response(error)
        render json: error
    end
end
