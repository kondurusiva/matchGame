import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickAnyThumbnail} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onClickImage = () => {
    onClickAnyThumbnail(id)
  }

  return (
    <li className="list">
      <button className="button" type="button" onClick={onClickImage}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
