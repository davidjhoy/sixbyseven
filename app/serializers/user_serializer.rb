class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :location, :about, :photo, :clientID, :image, :image_url
end
