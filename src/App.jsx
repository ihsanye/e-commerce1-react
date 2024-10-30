import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'
import Drawer from '@mui/material/Drawer';
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'
import { useEffect } from 'react'

function App() {

  const { products, drawer, totalAmount } = useSelector(store => store.basket)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket())
  }, [])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())} >{
          products && products.map(product => {
            return (
              <div key={product.id} className='flex-row' style={{ margin: '5px' }}>
                <img src={product.image} style={{ width: '50px' }} alt="" />
                <p style={{ width: '250px', margin: '0 5px' }}>{product.title}({product.count})</p>
                <p>$ {product.price}</p>
                <button>Sil</button>
              </div>
            )
          })}
          <div>Toplam:{totalAmount}</div>
        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
