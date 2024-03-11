import './index.css'

const MatchTabItem = props => {
  const {tabsList, onClickTab, isActive} = props
  const {tabId, displayText} = tabsList

  const onClickonTab = () => {
    onClickTab(tabId)
  }

  const classNames = isActive ? 'is-text-orange' : 'list-para'

  return (
    <li className="lists">
      <button className="button" type="button" onClick={onClickonTab}>
        <p className={`${classNames}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default MatchTabItem
