class DoctorsController < ApplicationController
    def index
        doctors = Doctor.all
        render json: doctors, include: [:practice, {reviews: {include: :user}}]
    end

    def show
        doctor = Doctor.find_by(id: params[:id])
        if doctor
            render json: doctor, include: [:practice, :reviews]
        else
            render json: {message: 'Doctor not found'}
        end
    end

    def create
        doctor = Doctor.new(doctor_params)
        if doctor.valid?
            doctor.save
            render json: doctor
        else
            render json: {message: 'Please complete the form for your doctor'}
        end
    end

    def update
        doctor = Doctor.find(params[:id])
        doctor.update(doctor_params)
        render json: doctor
    end

    private

    def doctor_params
        params.require(:doctor).permit(:firstname, :lastname, :phone_number, :street_address, :city, :state, :zip_code, :practice_id)
    end
end
