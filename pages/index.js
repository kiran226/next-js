import Link from 'next/link';
import {useRouter} from 'next/router'
function Home(){
    const router=useRouter();
    const handleClick=()=>{
        console.log("Placed order successfully");
        router.push('/product')
    }
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

            <div>
                <button onClick={handleClick} >
                    Place Order
                </button>
            </div>

        </div>
    )
}
export default Home;