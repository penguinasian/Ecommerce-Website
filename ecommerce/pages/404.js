import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a style={{textDecoration: 'underline'}}>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;