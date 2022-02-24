import {useRouter} from 'next/router';

function ProductDetail(){
    const router = useRouter();
    const pid = router.query.productId
    return(
        <div>
           <h1>Details about Product {pid}</h1>
        </div>
    )
}
export default ProductDetail;