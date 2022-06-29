import {Link, useLoaderData} from "@remix-run/react";
import * as firstPost from "./first-post.mdx";
import {json} from "@remix-run/node";

function postFromModule(mdxFile: { filename: string, attributes: { meta: {  } } }) {
    console.log(mdxFile.filename)
    return {
        slug: mdxFile.filename.replace(/\.mdx?$/, ""),
        ...mdxFile.attributes.meta,
    };
}

export async function loader() {
    return json([
        postFromModule(firstPost),
    ]);
}


export default function BlogIndex() {
    const posts = useLoaderData();
    return (
        <div>
            <h2>I should probably list out the articles here eh?</h2>
            Here you go.
            <ul>
                {posts.map((post: any) => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                        {post.description ? (
                            <p>{post.description}</p>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}
