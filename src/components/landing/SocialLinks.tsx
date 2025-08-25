import { GitHub, LinkedIn, Mail } from '@mui/icons-material'

export function SocialLinks() {
  const linkClass =
    'tw-inline-flex tw-items-center tw-gap-2 tw-text-slate-700 dark:tw-text-slate-200 hover:tw-text-primary-600 tw-transition-colors'
  return (
    <section className="tw-py-8">
      <div className="tw-flex tw-justify-center tw-gap-6">
        <a className={linkClass} href="https://github.com/example" target="_blank" rel="noreferrer">
          <GitHub fontSize="small" /> GitHub
        </a>
        <a className={linkClass} href="https://linkedin.com/in/example" target="_blank" rel="noreferrer">
          <LinkedIn fontSize="small" /> LinkedIn
        </a>
        <a className={linkClass} href="mailto:example@mail.com">
          <Mail fontSize="small" /> Email
        </a>
      </div>
    </section>
  )
}


