import type { MetaFunction } from '@remix-run/node'

export default function About() {
  return (
    <div className="flex justify-center">
      <div className={'prose lg:prose-xl py-10'}>About</div>
    </div>
  )
}

export let meta: MetaFunction = () => {
  return {
    title: 'About',
    description: 'About Dmitry Mukhin'
  }
}
