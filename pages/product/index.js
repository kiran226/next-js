import Link from 'next/link';

function ProductList(){
    return(
        <>

            <Link href="/">
                <a>Home</a>
            </Link>

            <h1>Product 1</h1>
            <h1>Product 2</h1>
            <h1>Product 3</h1>
        </>
    )
}
export default ProductList;