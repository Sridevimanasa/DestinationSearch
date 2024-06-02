// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="item-card">
      <img src={imgUrl} alt={name} className="item-image" />
      <p className="item-name">{name}</p>
    </li>
  )
}

export default DestinationItem
