// Server side rendering (SSR) is a technique used in web development where the server generates the HTML for a page and sends it to the client, 
// rather than relying on client-side JavaScript to render the page.
// This can improve performance and SEO, as search engines can crawl the fully rendered HTML.

async function page ({ params} ) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`,
        { cache: 'no-store'} // no-store means that the data will not be cached and will be fetched every time the page is loaded
    );
}

const data = await response.json();
    return (
        <div className="text-center text-2xl font-bold mt-10">
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
        </div>
    )
export default page;