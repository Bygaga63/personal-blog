import styles from 'highlight.js/styles/github-dark-dimmed.css';
import {LinksFunction} from "@remix-run/node";
import {Outlet} from '@remix-run/react';
// import type { LinksFunction, LoaderFunction } from 'remix';
// import { MetaFunction, Outlet } from "remix";

// export let loader: LoaderFunction = (whatthis) => {
//     return null;
// }

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
    ];
}

export default function Blog() {
    return (
        <div className={'flex justify-center'}>
            <div className={'prose lg:prose-xl py-10'}>
                <Outlet/>
            </div>
        </div>
    );
}

// export let meta: MetaFunction = () => {
//     return {
//         title: "Blog | Marius Espejo",
//         description: "Blog posts by Marius Espejo"
//     };
// };
