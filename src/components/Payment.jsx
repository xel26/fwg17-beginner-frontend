import BRI from "../assets/media/BRI.png"
import DANA from "../assets/media/DANA.png"
import BCA from "../assets/media/BCA.png"
import gopay from "../assets/media/gopay.png"
import ovo from "../assets/media/ovo.png"
import PayPal from "../assets/media/paypal.png"

import { Link } from "react-router-dom"

const PaymentList = ({list, idr}) => {
  return (
    <div className="flex justify-between">
      <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">
        {list}
      </h5>
      <h5 className="font-semibold text-xs sm:text-base">Idr.{idr.toLocaleString('id')}</h5>
    </div>
  );
};

const Payment = ({order, delivery, tax}) => {
    return (
        <div className="flex-1 h-fit flex flex-col">
        <div className="flex pt-1 h-12 font-semibold">
          <h4>Total</h4>
        </div>
        <div className="payment-summary bg-[#E8E8E84D] p-3 text-sm flex flex-col gap-4">
            <PaymentList list="order" idr={order}/>
            <PaymentList list="Delivery" idr={delivery}/>
            <PaymentList list="Tax" idr={tax}/>

          <hr/>

          <PaymentList list="Sub Total" idr={parseInt(order) + parseInt(delivery) + parseInt(tax)}/>

        <Link to="/history-order" className="bg-[#FF8906] w-full rounded-md text-xs sm:text-sm py-1.5 active:scale-95 transition-all flex justify-center">Checkout</Link>
          <p className="text-xs text-[#4F5665]">We Accept</p>

          <div className="flex flex-wrap justify-between gap-2 items-center">
            <div>
              <img src={BRI} />
            </div>

            <div>
              <img src={DANA} />
            </div>

            <div>
              <img src={BCA} />
            </div>

            <div>
              <img src={gopay} />
            </div>

            <div>
              <img src={ovo} />
            </div>

            <div>
              <img src={PayPal} />
            </div>
          </div>

          <p className="text-xs text-[#4F5665]">*Get Discount if you pay with Bank Central Asia</p>
        </div>
      </div>
    )
}

export default Payment