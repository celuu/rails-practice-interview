class DonationsController < ApplicationController
  before_action :set_donation, only: %i[ show edit update destroy ]

  # GET /donations or /donations.json
  def index
    @donations = Donation.includes(:user, :church).all
  end

  # GET /donations/1 or /donations/1.json
  def show
  end

  def donation_summary
    @total_donation = Donation.sum(:amount)
    @by_church = Donation.group_by(:church_id).sum(:amount)
  end

  # GET /donations/new
  def new
    @users = User.all
    @churches = Church.all
    @donations = Donation.includes(:user, :church).order(created_at: :desc)
    @total_donation = Donation.sum(:amount)
    @by_church = Donation.joins(:church).group('churches.name').sum(:amount)
  end

  # GET /donations/1/edit
  def edit
    @users = User.all
    @churches = Church.all
  end

  # POST /donations or /donations.json
  def create
    @donation = Donation.new(donation_params)

    respond_to do |format|
      if @donation.save
        # format.html { redirect_to @donation, notice: "Donation was successfully created." }
        format.json { render :show, status: :created, location: @donation }
      else      
        # format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @donation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /donations/1 or /donations/1.json
  def update
    respond_to do |format|
      if @donation.update(donation_params)
        format.html { redirect_to @donation, notice: "Donation was successfully updated.", status: :see_other }
        format.json { render :show, status: :ok, location: @donation }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @donation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /donations/1 or /donations/1.json
  def destroy
    @donation.destroy

    respond_to do |format|
      format.html { redirect_to donations_path, notice: "Donation was successfully destroyed.", status: :see_other }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_donation
      @donation = Donation.includes(:user, :church).find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def donation_params
      params.require(:donation).permit(:amount, :user_id, :church_id)
    end
end
