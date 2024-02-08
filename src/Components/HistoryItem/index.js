import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list-item-card">
      <div>
        <p className="history-time">{timeAccessed}</p>
      </div>
      <div className="history-domain-delete-card">
        <div className="history-logo-domain-card">
          <img className="history-logo" src={logoUrl} alt="domain logo" />
          <div className="history-domain-card">
            <p className="history-name">{title}</p>
            <p className="history-domain-url">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-button-card">
          <button
            testid="delete"
            type="button"
            className="button"
            onClick={onClickDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
