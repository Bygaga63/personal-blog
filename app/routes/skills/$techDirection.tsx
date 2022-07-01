import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { TechDirection } from '~/types/skills'
import { motion } from 'framer-motion'
type LoaderData = {
  techDirection: TechDirection
}

export const loader = async ({ params }: { params: { techDirection: TechDirection } }) => {
  return json({ techDirection: params.techDirection })
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export default function SkillDirection() {
  const { techDirection } = useLoaderData<LoaderData>()

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
      variants={pageVariants}>
      <main className="mx-auto max-w-4xl">
        <h1 className="my-6 border-b-2 text-center text-3xl">{techDirection}</h1>
      </main>
    </motion.div>
  )
}
