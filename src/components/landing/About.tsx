import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="tw-py-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="tw-max-w-3xl tw-mx-auto tw-text-center"
      >
        <h2 className="tw-text-2xl tw-font-semibold tw-mb-3">About</h2>
        <p className="tw-text-slate-700 dark:tw-text-slate-300">
          Sample bio: I am a software engineer focused on building robust, user-centric web applications.
          I enjoy working across the stack, from crafting intuitive UIs to designing resilient APIs.
        </p>
      </motion.div>
    </section>
  )
}


