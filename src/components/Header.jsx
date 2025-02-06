import '../styles/Header.scss'
import logo from '../images/logo.png'

function Header() {
  return (
    <div className='Header_container'>
      <img className='Header_logo' src={logo} alt="Harry Potter logo"/>
    </div>
  )
}

export default Header