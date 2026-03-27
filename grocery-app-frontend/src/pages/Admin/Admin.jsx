import React, { useEffect, useState } from 'react'
import './Admin.css'
import Header from '../../components/Header/Header'
import { getAllOrders } from '../../api/orderApi';
const Admin = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchOrders();
    },[])

    const fetchOrders = async () => {
      setLoading(true)
      const res = await getAllOrders()
      if (res && res.success) {
        setOrders(res.data)
      }
      setLoading(false)
    }
  return (
     <div className='admin-page'>
      <Header />

      <div className='admin-container'>
        <h2 className='admin-title'>Orders</h2>

        {loading? (
          <p className='loading'>Loading...</p>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className='order-card'>
              <div className='order-header'>
                <p>Order ID: #{order.id}</p>
                <p className='order-date'>{new Date(order.created_at).toLocaleString()}</p>
              </div>

              <div className='order-info'>
                <p><strong>Customer:</strong> {order.customer_name}</p>
                <p><strong>Phone:</strong> {order.phone_no}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p className='order-total'><strong>Total:</strong> $ {order.total}</p>
              </div>

              <div className='order-items'>
                <h4>Items Ordered:</h4>
                <div className='items-grid'>
                  {order.items.map((item,index) => (
                    <div key={index} className='order-item-detail'>
                      <span>{item.name}</span>
                      <span> x {item.quantity} -</span>
                      <span> $ {item.price}</span>
                    </div>
                  ))}
                </div>
              </div>              
            </div>
          ))
        ) : (
            <p className='no-orders'>No orders found.</p>
        )}
      </div>
    </div>
  )
}

export default Admin