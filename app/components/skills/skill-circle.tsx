import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import type { TechDirection } from '~/types/skills'

type Props = {
  techDirection: TechDirection
}

const colorByTechDirection: Record<TechDirection, string> = {
  backend: 'bg-blue-500',
  frontend: 'bg-green-500',
  mobile: 'bg-red-500'
}

export const SkillCircle: FC<Props> = ({ techDirection }) => {
  const color = colorByTechDirection[techDirection]
  return (
    <Link to={techDirection}>
      <motion.div
        whileHover={{ scale: 1.05, opacity: 1 }}
        className={`w-80 h-80 ${color} rounded-full flex justify-center items-center opacity-60 -ml-10`}>
        <span className={'text-primary text-2xl capitalize'}>{techDirection}</span>
      </motion.div>
    </Link>
  )
}
