class DoctorsController < ApplicationController
    def index
        doctors = Doctor.all
        render json: doctors, include: [:office, :practice]
    end

    def show
        doctor = Doctor.find_by(id: params[:id])
        if doctor
            render json: doctor, except: [:created_at, :updated_at]
        else
            render json: {message: 'Doctor not found'}
        end
    end

    def create
        doctor = Doctor.new(doctor_params)
        if doctor.valid?
            doctor.save
            render json: doctor, except: [:created_at, :updated_at]
        else
            render json: {message: 'Please complete the form for your doctor'}
        end
    end

    def update
        doctor = Doctor.find(params[:id])
        doctor.update(doctor_params)
        render json: doctor, except: [:created_at, :updated_at]
    end

    private

    def doctor_params
        params.require(:doctor).permit(:firstname, :lastname, :phone_number, :office_id, :practice_id)
    end
end
