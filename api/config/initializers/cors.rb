Api::Application.configure do
    allowed_origins = [
      "app.salesloft.com"
    ]
  
    if Rails.env.development? || Rails.env.qa?
      allowed_origins = allowed_origins +
          [
              "localhost:3001"
          ]
    end
  
    config.middleware.insert_before 0, "Rack::Cors" do
      allow do
        origins *allowed_origins
        resource "*",
          credentials: true,
          headers: :any,
          methods: [:get, :post, :options, :put, :delete]
      end
    end
  end
  