class UserSerializer
  include JSONAPI::Serializer
  attributes :name, :location, :about, :photo, :clientID, :image, :image_url
end
