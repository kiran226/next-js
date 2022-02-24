import Link from 'next/link';
function Home(){
    return(
        <div>
            <h1>Home Page</h1>

            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <br/>
            <br/>

            <Link href="/product">
                <a>Product</a>
            </Link>
            <br/>
            <br/>

            <Link href="/docs">
                <a>Docs</a>
            </Link>

        </div>
    )
}
export default Home;