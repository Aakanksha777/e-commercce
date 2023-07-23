import './Wishlist.css'
import ProductCard from '../ProductCard'

const Wishlist = ({ wishlist }) => {
  return (
    <>
      <h2 className='wishlist-header'>My Wishlist</h2>
      <div className='wishlist-main-container'>
        {wishlist.length > 0 ? wishlist.map((productData) => (
          <ProductCard key={productData.id} productData={productData} />
        )) :
          <div>No items in Wishlist</div>}
      </div>
    </>
  )
}

export default Wishlist
