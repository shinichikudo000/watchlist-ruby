# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Anime.destroy_all

Anime.create!([
    {
        title: 'Attack on Titan',
        description: "In a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans, a young boy named Eren Yeager joins the military to seek revenge after his hometown is destroyed by Titans. 'Attack on Titan' follows Eren and his friends as they uncover the mysteries behind the Titans and fight for survival."
    },
    {
        title: 'My Hero Academia',
        description: "In a world where nearly everyone possesses superpowers known as 'Quirks,' a timid boy named Izuku Midoriya dreams of becoming a hero despite being born without a Quirk. When he inherits the legendary Quirk 'One For All' from the greatest hero, All Might, Izuku enrolls in U.A. High School to train and become the next Symbol of Peace. 'My Hero Academia' chronicles Izuku's journey alongside his classmates as they face various challenges and villains to become professional heroes."
    }
])

p "Created #{Anime.count} anime"