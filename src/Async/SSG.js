// Static site generation is a technique in which the HTML pages are generated at build time, rather than at runtime.
// SSF store the data in a cache and serve it from there, rather than fetching it from the server every time the page is loaded.
async function page({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    //No cache option means that the data will be cached and served from there, rather than fetching it from the server every time the page is loaded

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