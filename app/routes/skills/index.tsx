import type { MetaFunction } from '@remix-run/node'
import { SkillCircle } from '~/components/skills'

export default function Skills() {
  return (
    <div className="flex justify-center container mx-auto">
      <SkillCircle techDirection={'backend'} />
      <SkillCircle techDirection={'frontend'} />
      <SkillCircle techDirection={'mobile'} />
    </div>
  )
}

export let meta: MetaFunction = () => {
  return {
    title: 'Skills',
    description: 'Dmitry Mukhin Skills'
  }
}
