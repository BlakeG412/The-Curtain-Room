class OfficesController < ApplicationController
    def create
        office = Office.new(office_params)
        if office.valid?
            office.save
            render json: office, except: [:created_at, :updated_at]
        else
            render json: {message: 'Please complete the form for new office'}
        end
    end

    private

    def office_params
        params.require(:office).permit(:street_address, :city, :state, :zip_code)
    end
end
