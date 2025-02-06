import { Link } from "react-router-dom"
import '../styles/PageNotFound.scss'

function PageNotFound() {
  return (
    <div className='PageNotFound_container'>
        <h2>404</h2>
        <h3>Page not found!</h3>
        <Link to={'/'}>Go back to start</Link>
    </div>
  )
}

export default PageNotFound