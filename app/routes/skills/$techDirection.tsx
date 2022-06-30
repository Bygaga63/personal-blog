import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { TechDirection } from '~/types/skills'

type LoaderData = {
  techDirection: TechDirection
}

export const loader = async ({ params }: { params: { techDirection: TechDirection } }) => {
  return json({ techDirection: params.techDirection })
}

export default function SkillDirection() {
  const { techDirection } = useLoaderData<LoaderData>()

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{techDirection}</h1>
    </main>
  )
}
