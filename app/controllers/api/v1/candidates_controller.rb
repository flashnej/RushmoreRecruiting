class Api::V1::CandidatesController < ApplicationController

  def index

  end

  def create
    resume = params["resume"]
    user_info = JSON.parse(params["info"])
    candidate = Candidate.new(first_name: user_info["firstName"], last_name: user_info["lastName"], email: user_info["email"], resume: resume)
    if candidate.save
      render json: {status: "ok"}
    end
  end
end
