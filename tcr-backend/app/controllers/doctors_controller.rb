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
        doctor = Doctor.create({
            firstname: params[:firstname],
            lastname: params[:lastname],
            phone_number: params[:phone_number],
            street_address: params[:street_address],
            city: params[:city],
            state: params[:state],
            zip_code: params[:zip_code],
            practice_id: params[:practice_id]
        })
        render json: {success: true, id: doctor.id}
    end

    def update
        doctor = Doctor.find(params[:id])
        doctor.update(doctor_params)
        render json: doctor
    end
end
