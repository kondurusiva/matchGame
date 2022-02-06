import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    changeTab(tabId)
  }

  const buttonStyle = isActive ? 'button button-active' : 'button'

  return (
    <li className="list-styles">
      <button type="button" onClick={onClickTab} className={buttonStyle}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
