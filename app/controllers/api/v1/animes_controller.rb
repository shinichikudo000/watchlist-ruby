class Api::V1::AnimesController < ApplicationController
    before_action :set_anime, only: [:show, :update, :destroy]
  
    # GET /animes
    def index
      @animes = Anime.order(created_at: :desc)
      render json: @animes
    end
  
    # GET /animes/1
    def show
      render json: @anime
    end
  
    # POST /animes
    def create
      @anime = Anime.new(anime_params)
  
      if @anime.save    
        render json: @anime, status: :created, location: @anime
      else
        render json: @anime.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /animes/1
    def update
      if @anime.update(anime_params)
        render json: @anime
      else
        render json: @anime.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /animes/1
    def destroy
      @anime.destroy
    end
  
    private
    
    def set_anime
        @anime = Anime.find(params[:id])
    end
  
    def anime_params
        params.require(:anime).permit(:title, :description)
    end
end