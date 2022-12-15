import React from 'react'
import { useFilterContext } from '../context/filter_context';
import { useProductContext } from '../context/productContext'
import Category from './Category';
import FilterSection from './FilterSection';
import Sort from './Sort';



const FeatureProduct = () => {
  const { isLoading} = useProductContext();
  const {filter_products} = useFilterContext();
  //  console.log('filter data is here', filter_products);
  if (isLoading) {
    return <div>.....is...Loading</div>
  }
  return (
    <>
      <div>
        <div className='container py-2'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1>Product</h1>
              <hr />
            </div>
            <div className='row'>
              <div className='col-3'>
                <FilterSection/>
              </div>
              <div className='col-6'>
                <Category/>
              </div>
              <div className='col-3'>
                <Sort/>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row justify-content-around'>
            {
              filter_products.map((item) => {
                return (
                  <>
                    <div className="card my-4 py-4" key={item.id} style={{ width: '18rem' }}>
                      <img src={item.image} className="card-img-top" alt="" />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="lead">Rs.{item.price}/. only</p>
                        <button className='btn btn-outline-primary'>addtocart</button>

                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default FeatureProduct
