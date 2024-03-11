import './index.css'

const MatchItems = props => {
  const {imagesList, onClickImagesList} = props
  const {thumbnailUrl} = imagesList

  const onClickOnImages = () => {
    onClickImagesList(thumbnailUrl)
  }

  return (
    <li className="">
      <button className="button" type="button" onClick={onClickOnImages}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default MatchItems
