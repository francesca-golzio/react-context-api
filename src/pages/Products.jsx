import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useBudget } from '../contexts/BudgetContext';


function Products() {

  const products_api = 'https://fakestoreapi.com/products'
  const [prodotti, setProdotti] = useState([]);


  function FetchProdotti() {
    fetch(products_api)
      .then(res => res.json())
      .then(prodotti => {
        //console.log(prodotti)
        setProdotti(prodotti);
      })
      .catch(error => console.log(error))
  }

  useEffect(FetchProdotti, []);

  const { budgetMode, setBudgetMode, handleBudget } = useBudget();

  function renderProducts() {

    // ⚠️ qui bisognerebbe centralizzare per non ripetere la logica
    if (budgetMode === true) {
      const lowBudgetProductS = prodotti.filter((prodotto) => prodotto.price <= 30);

      return (
        <>
          {
            lowBudgetProductS.map((prodotto) => (
              <div className="card col" key={prodotto.id}>
                <span className="label">
                  <i className='bi bi-star-fill'></i> {prodotto.rating.rate} ({prodotto.rating.count})
                </span>
                <img className="card-img-top" src={prodotto.image} alt={prodotto.title} />
                <div className="card-body">
                  <div className='product_link'>
                    <Link to={`/products/${prodotto.id}`}>🏄 Surf to product page</Link>
                  </div>
                  <div className="price">{`${prodotto.price} $`}</div>
                  <h5 className="card-title">{prodotto.title}</h5>
                  {/* <p className="card-text">{prodotto.description}</p> */}
                </div>
              </div>
            ))
          }
        </>
      )
    } else {

      return (
        <>
          {prodotti.map((prodotto) => (
            <div className="card col" key={prodotto.id}>
              <span className="label">
                <i className='bi bi-star-fill'></i> {prodotto.rating.rate} ({prodotto.rating.count})
              </span>
              <img className="card-img-top" src={prodotto.image} alt={prodotto.title} />
              <div className="card-body">
                <div className='product_link'>
                  <Link to={`/products/${prodotto.id}`}>🏄 Surf to product page</Link>
                </div>
                <div className="price">{`${prodotto.price} $`}</div>
                <h5 className="card-title">{prodotto.title}</h5>
                {/* <p className="card-text">{prodotto.description}</p> */}
              </div>
            </div>
          ))}
        </>

      )
    }
  }

  return (
    <>

      <main>
        {/* <h2>Prodotti</h2> */}

        <div className="container products_page">
          <div className="card_deck row row-cols-1 row-cols-sm-2 row-cols-md-4">

            {renderProducts()}


            {/* <div className="card col">
              <img className="card-img-top" src="https://picsum.photos/id/1/200/300" alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
            </div> */}


          </div>
        </div>

      </main>

    </>
  )
}

export default Products
