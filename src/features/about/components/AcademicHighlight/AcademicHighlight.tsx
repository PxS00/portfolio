import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function AcademicHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl border border-(--primary-color)/20 bg-gradient-to-br from-(--bg-color-alt) to-(--bg-color) p-8 sm:p-12 transition-all hover:-translate-y-1 hover:shadow-md hover:border-(--primary-color)/40"
    >
      <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-(--primary-color)/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-(--secondary-color)/5 blur-3xl" />

      <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-(--primary-color)/10 text-(--primary-color)">
          <Award className="h-10 w-10" />
        </div>
        <div>
          <h3 className="mb-3 text-2xl font-bold text-(--title-color)">Destaque Acadêmico</h3>
          <p className="text-lg leading-relaxed text-(--muted-color)">
            Selecionado entre os 10 melhores projetos do curso de Análise e Desenvolvimento de
            Sistemas da FIAP para apresentação no <strong>FIAP NEXT</strong>. Atuou no
            desenvolvimento de uma solução tecnológica para o Hospital das Clínicas, em colaboração
            com uma equipe multidisciplinar, contribuindo na resolução de um problema real por meio
            da aplicação de engenharia de software.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
