import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { useThemeMode } from '../../store/themeStore.ts'
import logoLight from '../../assets/thanhnlt-high-resolution-logo-transparent.png'
import logoDark from '../../assets/thanhnlt-high-resolution-logo-grayscale-transparent.png'
import { useTypingEffect } from '../../hooks/useTypingEffect.ts'

export function Hero() {
  const { mode } = useThemeMode()
  const typing = useTypingEffect([
    'Fullstack Developer',
    'UI/UX Enthusiast',
    'Passionate about building modern web apps',
  ])

  return (
    <section className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-bg-gradient-to-br tw-from-indigo-500/20 tw-via-sky-500/15 tw-to-fuchsia-500/20 dark:tw-from-indigo-400/20 dark:tw-via-sky-400/15 dark:tw-to-fuchsia-400/20 tw-border tw-border-slate-200 dark:tw-border-slate-800">
      <div className="tw-px-6 tw-py-14 md:tw-px-10">
        <div className="tw-grid md:tw-grid-cols-2 tw-gap-8 tw-items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
              <img
                src={mode === 'light' ? logoLight : logoDark}
                alt="ThanhNLT logo"
                className="tw-w-12 tw-h-12 tw-rounded-full tw-object-contain tw-bg-white dark:tw-bg-transparent"
              />
              <span className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-300">Portfolio • v1</span>
            </div>
            <h1 className="tw-text-4xl tw-font-extrabold tw-leading-tight">Nguyễn Văn A</h1>
            <p className="tw-text-indigo-600 dark:tw-text-indigo-400 tw-font-medium tw-mt-2 tw-h-6">{typing}&nbsp;</p>
            <p className="tw-text-slate-700 dark:tw-text-slate-300 tw-mt-4 tw-max-w-prose">
              I craft clean, accessible, and scalable web apps with a product mindset—focused on
              UX polish and robust engineering.
            </p>
            <div className="tw-mt-6 tw-flex tw-flex-wrap tw-gap-3">
              <Button variant="contained" href="#contact">Liên hệ</Button>
              <Button variant="outlined" href="#about">Xem thêm</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="tw-hidden md:tw-block"
          >
            <div className="tw-aspect-video tw-rounded-xl tw-bg-slate-200 dark:tw-bg-slate-800 tw-border tw-border-slate-300 dark:tw-border-slate-700 tw-shadow-inner tw-flex tw-items-center tw-justify-center">
              <span className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm">Preview space</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


