import { motion } from 'framer-motion'
import { Code, DesignServices, RocketLaunch } from '@mui/icons-material'

const items = [
  { icon: <Code />, title: 'Clean Code', desc: 'Readable, maintainable TypeScript with clear architecture.' },
  { icon: <DesignServices />, title: 'Beautiful UI', desc: 'Modern, accessible design with MUI + Tailwind.' },
  { icon: <RocketLaunch />, title: 'Performance', desc: 'Fast, responsive, and production-ready builds.' },
]

export function Features() {
  return (
    <section className="tw-py-12">
      <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="tw-rounded-xl tw-border tw-border-slate-200 dark:tw-border-slate-800 tw-bg-white/60 dark:tw-bg-slate-900/60 tw-backdrop-blur-sm tw-p-5"
          >
            <div className="tw-text-primary-600 dark:tw-text-primary-400">{it.icon}</div>
            <h3 className="tw-mt-3 tw-font-semibold">{it.title}</h3>
            <p className="tw-text-slate-600 dark:tw-text-slate-300 tw-mt-1">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


