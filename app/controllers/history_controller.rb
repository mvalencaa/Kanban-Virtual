class HistoryController < ApplicationController

	def new
	end

	def create
		history = History.new params[:history]

		history.save!
	end

end
