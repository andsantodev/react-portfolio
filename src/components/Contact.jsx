import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/contact.sass'

const contact = [
  { id: 'icon-phone', 
    name: 'Telefone', 
    icon: <AiFillPhone/>, 
    data: '(11) 99999-9999', 
    url: 'tel:+5511999999999'
  },
  { id: 'icon-email', 
    name: 'E-mail', 
    icon: <AiOutlineMail/>, 
    data: 'and.santos123@gmail.com', 
    url: 'email:and.santos123@gmail.com'
  },
  { id: 'icon-pin', 
    name: 'Localização', 
    icon: <AiFillEnvironment/>, 
    data: 'São Paulo / SP', 
    url: ''
  },
]

const Contact = () => {
  return (
    <section id="contacts">
      {contact.map((contact) => (
        <div className="info-cards" key={contact.id}>
          <span id={contact.id}>{contact.icon}</span>
          <div>
            <h3>{contact.name}</h3>
            <a href={contact.url}>{contact.data}</a>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Contact
