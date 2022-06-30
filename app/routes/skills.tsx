import { Outlet } from '@remix-run/react'

export default function Skills() {
  return (
    <div className="flex justify-center">
      <div className={'prose lg:prose-xl py-10'}>
        <Outlet />
      </div>
    </div>
  )
}

// export let meta: MetaFunction = () => {
//     return {
//         title: "Blog | Marius Espejo",
//         description: "Blog posts by Marius Espejo"
//     };
// };
