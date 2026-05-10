import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'
import { useTypewriter } from '../../../shared/hooks/useTypewriter'
import ContactCard from './ContactCard/ContactCard'
import StatusBadge from './StatusBadge/StatusBadge'

const CONTACTS = [
  {
    platform: 'LinkedIn',
    value: 'lucas-pedro-souza',
    url: 'https://www.linkedin.com/in/lucas-pedro-souza/',
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    platform: 'GitHub',
    value: 'PxS00',
    url: 'https://github.com/PxS00',
    icon: <Github className="h-6 w-6" />,
  },
  {
    platform: 'Instagram',
    value: '@pxs_00',
    url: 'https://www.instagram.com/pxs_00/',
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    platform: 'E-mail',
    value: 'lucaspsouza00@gmail.com',
    url: 'mailto:lucaspsouza00@gmail.com',
    icon: <Mail className="h-6 w-6" />,
  },
]

export default function ContactPage() {
  const [showCursor, setShowCursor] = useState(true)
  const title = useTypewriter({
    text: 'Contato',
    delay: 80,
    startDelay: 300,
    onDone: () => setShowCursor(false),
  })

  return (
    <div className="container mx-auto px-6 py-24 lg:px-12">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <h1 className="mb-6 inline-flex items-center gap-4 rounded-full bg-(--primary-color)/10 px-6 py-3 text-4xl font-bold text-(--title-color) md:text-5xl">
          <span className="font-mono text-(--primary-color)">{'>'}_</span>
          <span className="flex items-center">
            {title}
            <span
              className={`ml-1 text-5xl font-thin text-(--primary-color) md:text-6xl ${
                showCursor ? 'animate-pulse opacity-70' : 'opacity-0'
              }`}
              style={{ letterSpacing: '-0.2em' }}
            >
              |
            </span>
          </span>
        </h1>
        
        <StatusBadge />
        
        <p className="mt-8 max-w-2xl text-lg text-(--text-color)">
          Vamos construir algo juntos. Se você tem um projeto em mente, uma pergunta técnica ou apenas quer trocar uma ideia sobre engenharia de software, sinta-se à vontade para me chamar!
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {CONTACTS.map((contact, index) => (
          <ContactCard key={contact.platform} {...contact} index={index} />
        ))}
      </div>
    </div>
  )
}
