import { motion } from 'framer-motion'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { resolveReadmeImageUrl } from '../../utils/projectHelpers'

interface ReadmeViewerProps {
  content: string
  repoName: string
  defaultBranch: string
}

// Renders GitHub README markdown with relative image URL resolution
export default function ReadmeViewer({ content, repoName, defaultBranch }: ReadmeViewerProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="readme-content prose prose-invert max-w-none"
    >
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ node, ...props }) => {
            const src = resolveReadmeImageUrl(props.src || '', repoName, defaultBranch)
            return <img {...props} src={src} alt={props.alt || ''} loading="lazy" />
          },
        }}
      >
        {content}
      </Markdown>
    </motion.article>
  )
}
