import { Link } from 'react-router-dom'

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-row">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.label} className="breadcrumb-item">
              {item.to && !isLast ? (
                <Link to={item.to} className="breadcrumb-link inline-breadcrumb-link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
              {!isLast ? <span className="breadcrumb-separator">/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
