import { motion } from 'framer-motion'
import { ArrowRight, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AcademicHighlight() {
  return (
    <div className="flex flex-col gap-8">
      {/* FIAP Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-(--primary-color)/20 bg-gradient-to-br from-(--bg-color-alt) to-(--bg-color) p-8 transition-all hover:-translate-y-1 hover:border-(--primary-color)/40 hover:shadow-md sm:p-12"
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
              desenvolvimento de uma solução tecnológica para o Hospital das Clínicas, em
              colaboração com uma equipe multidisciplinar, atuando na resolução de um problema real
              por meio da aplicação de engenharia de software.
            </p>
            <Link
              to="/projects/Luma"
              className="group mt-4 inline-flex items-center gap-2 font-semibold text-(--primary-color) transition-all hover:translate-x-1"
            >
              Ver projeto Luma
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Certification Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative overflow-hidden rounded-3xl border border-(--primary-color)/20 bg-gradient-to-br from-(--bg-color-alt) to-(--bg-color) p-8 transition-all hover:-translate-y-1 hover:border-(--primary-color)/40 hover:shadow-md sm:p-12"
      >
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-(--primary-color)/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-(--secondary-color)/5 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="group flex h-24 w-24 shrink-0 items-center justify-center overflow-visible">
            <img
              src="/certs/OCI25FNDCFA.png"
              alt="Oracle Cloud Infrastructure Foundations Associate 2025 Badge"
              className="h-full w-full scale-[2.5] object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-[2.8]"
            />
          </div>
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-bold text-(--title-color)">
              Oracle Cloud Infrastructure Foundations Associate 2025
            </h3>
            <p className="text-lg leading-relaxed text-(--muted-color)">
              Certificação concluída pela <strong>Oracle University</strong>.
              <br />
              Competências: OCI, Compute, Networking, Storage, Security, IAM, Compartments, VCNs e
              Cloud Architecture.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="inline-block rounded-full bg-(--primary-color)/10 px-3 py-1 text-sm font-medium text-(--primary-color)">
                Concluída
              </span>
              <a
                href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=E63998027E057F05952B3E9B77916904361B1492B6DAF2EC28A3040227D2891D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-(--primary-color) hover:underline"
              >
                Credencial Oficial
              </a>
              <span className="text-(--muted-color)">•</span>
              <a
                href="/certs/OCI-associateCertificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-(--primary-color) hover:underline"
              >
                Visualizar PDF
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
