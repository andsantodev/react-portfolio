import { DiHtml5, DiCss3, DiBootstrap, DiWordpress, DiReact, DiJsBadge } from 'react-icons/di'

import '../styles/components/technologies.sass'

const technologies = [
  { id: 'html', 
    name: 'HTML5', 
    icon: <DiHtml5/>, 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ab'
  },
  { id: 'css', 
    name: 'CSS3', 
    icon: <DiCss3/>, 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ab'
  },
  { id: 'bootstrap', 
    name: 'BOOTSTRAP', 
    icon: <DiBootstrap/>, 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ab'
  },
  { id: 'wordpress', 
    name: 'WORDPRESS', 
    icon: <DiWordpress/>, 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ab'
  },
  { id: 'react', 
    name: 'REACT', 
    icon: <DiReact/>, 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ab'
  },
  { id: 'javascript', 
    name: 'JAVASCRIPT', 
    icon: <DiJsBadge/>, 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ab'
  },
]

const Technologies = () => {
  return (
    <section className='technologies'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className='technologies-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technologies-info'>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies