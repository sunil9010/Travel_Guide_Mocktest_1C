import './index.css'

const TourPlaces = props => {
  const {tourlist} = props
  const {imageUrl, name, description} = tourlist
  return (
    <li className="li">
      <img src={imageUrl} alt={name} className="image" />
      <div className="para-con">
        <h1 className="para">{name}</h1>
        <p className="para2">{description}</p>
      </div>
    </li>
  )
}
export default TourPlaces
