class FallbackController < ActionController::Base
    def index
      render file: 'public/application.js'
    end
end