import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
  //const { id, title, price, description, category, image, rating } = useParams();
  const { id } = useParams();
  //console.log(id);
  const product_api = `https://fakestoreapi.com/products/${id}`
  const [fetchedProduct, setFetchedProduct] = useState(null);

  useEffect(() => {

    fetch(product_api)
      .then(res => res.json())
      .then(prodotto => {
        //console.log('🟢', prodotto, id);
        //console.log('🟢', id);
        setFetchedProduct(prodotto)
      })
      .catch((error) => console.log(error));

  }, [id])

  /*   if(fetchedProduct === null) { */
  if (!fetchedProduct) {
    //console.log('loading');
    return (
      <div>loading</div>
    )
  }

  const { title, price, description, category, image, rating } = fetchedProduct;

  return (
    <>
      <main>
        <div className="container-fluid debug">
          <div className='product_img col-12'>
            <div className='product_classification col-12 '>
              <div className='product_category'>{`# ${category}`}</div>
              <div className='product_rating debug'>
                <i className="bi bi-star-fill"></i> {`${rating.rate} (${rating.count})`}
              </div>
            </div>
            <img src={image} alt="" />
          </div>
        </div>
        <div className="container container_product_page">
          <div className="row">

            <div className='product_title col-12'><h2>{title}</h2></div>
            <div className='product_description col-12 col-md-10 col-lg-8'><p>{description}</p></div>

            <div className='product_price'>{`${price} $`}</div>









          </div>
        </div>
      </main >
    </>
  )
}