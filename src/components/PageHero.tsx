import { motion } from 'framer-motion'
import InternalLink from './InternalLink'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  image?: string
  primaryAction?: { label: string; to: string }
  secondaryAction?: { label: string; to: string }
}

const PageHero = ({ eyebrow, title, description, image = '/assets/images/hero.png', primaryAction, secondaryAction }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover grayscale opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
      </div>
      <div className="max-w-container-max mx-auto px-margin-edge">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.3em] mb-6 block">
            {eyebrow}
          </span>
          <h1 className="font-display-xl text-display-lg text-on-surface leading-[0.95] mb-8">
            {title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            {description}
          </p>
          {(primaryAction || secondaryAction) && (
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              {primaryAction && (
                <InternalLink
                  to={primaryAction.to}
                  className="inline-flex items-center justify-center bg-tertiary px-8 py-4 font-label-caps text-label-caps text-on-tertiary uppercase tracking-widest transition-transform hover:scale-[1.02]"
                >
                  {primaryAction.label}
                </InternalLink>
              )}
              {secondaryAction && (
                <InternalLink
                  to={secondaryAction.to}
                  className="inline-flex items-center justify-center border border-tertiary/30 px-8 py-4 font-label-caps text-label-caps text-on-surface uppercase tracking-widest transition-colors hover:border-tertiary hover:text-tertiary"
                >
                  {secondaryAction.label}
                </InternalLink>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero

