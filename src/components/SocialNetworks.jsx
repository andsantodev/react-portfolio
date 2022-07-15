import { FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/social-networks.sass'

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedinIn />, url: '#' },
  { name: 'github', icon: <FaGithub />, url: '#' },
  { name: 'instagram', icon: <FaInstagram />, url: '#' },
]

const SocialNetworks = () => {
  return (
    <section id="social-network">
      {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks