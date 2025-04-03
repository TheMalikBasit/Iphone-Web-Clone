// Incremental Static Regeneration
// ISR is a feature that allows you to update static pages after the site has been built and deployed.
// This stores the data after a specific time period, so that data always stays fresh and up to date.
// This is the combination of SSG and SSR, where the page is generated at build time and then updated at runtime.

async function page({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`,
        { next: { revalidate: 10 } } // revalidate means that the data will be cached and served from there, rather than fetching it from the server every time the page is loaded
    );

    const data = await response.json();
    return (
        <div className="text-center text-2xl font-bold mt-10">
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
        </div>
    )
}
export default page;