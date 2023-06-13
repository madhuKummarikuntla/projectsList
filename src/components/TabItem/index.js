import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabDetails, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickChange = () => {
    updateTabDetails(tabId)
  }

  const activeTabClass = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onClickChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
