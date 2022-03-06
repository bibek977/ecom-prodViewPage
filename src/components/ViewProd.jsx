import React from 'react'
import './scss/viewProd.css'

export default function ViewProd() {
  return (
      <>
      <div className="productView">
          <div className="prod-items">
              <div className="single-img">
                  <img src="https://cdn.dribbble.com/users/2522428/screenshots/14149626/wax_candle_label_design_4x.jpg" alt="" />
              </div>
              <div className="mul-img">
                  <img src="https://5.imimg.com/data5/SELLER/Default/2020/12/ZX/XM/NH/35592063/rose-pillar-candle-500x500.jpg" alt="" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQsVIabphE2PuIOWMqBTlIglOcQGbJfUAAg&usqp=CAU" alt="" />
                  <img src="https://cdn.dribbble.com/users/2522428/screenshots/14149626/wax_candle_label_design_4x.jpg" alt="" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHCp5es3sedjlhpu4cA4rZbbd_oF0kGBktRCKjfv0b0KQ3hz_b1IJDzNfpsMdvzJNDzM&usqp=CAU" alt="" />
                </div>
          </div>

          <div className="prod-desc">
              <h2>Title....</h2>
              <h3>Desc.................................................................</h3>
              <select>
                  <option value="parafin">Parafin</option>
                  <option value="soya">Soya</option>
              </select>
              <div className="prod-price">
              <p>price : $$$ </p>
              <div className="prod-inc">
                  <button>-</button>
                  <input type="text" />
                  <button>+</button>
              </div>
              </div>
              <div className="prod-btn">
                  <button>Add To Cart</button>
                  <button>Checkout Cart</button>
              </div>
          </div>
      </div>
      </>
  )
}
