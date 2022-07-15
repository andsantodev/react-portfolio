import Contact from './Contact'
import SocialNetworks from './SocialNetworks'

import Avatar from '../img/black-panther.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Anderson Romão" />
      <p className="title">Desenvolvedor Front End</p>
      <SocialNetworks/>
      <Contact/>
      <a href="#" className="btn">Download Curriculo</a>
    </aside>
  )
}

export default Sidebar