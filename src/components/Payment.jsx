import BRI from "../assets/media/BRI.png"
import DANA from "../assets/media/DANA.png"
import BCA from "../assets/media/BCA.png"
import gopay from "../assets/media/gopay.png"
import ovo from "../assets/media/ovo.png"
import PayPal from "../assets/media/paypal.png"
import Button from '../components/Button'

const PaymentList = ({list, idr}) => {
  return (
    <div className="flex justify-between">
      <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">
        {list}
      </h5>
      <h5 className="font-semibold text-xs sm:text-base">Idr.{idr}</h5>
    </div>
  );
};

const Payment = () => {
    return (
        <div className="flex-1 h-fit flex flex-col">
        <div className="flex pt-1 h-12 font-semibold">
          <h4>Total</h4>
        </div>
        <div className="payment-summary bg-[#E8E8E84D] p-3 text-sm flex flex-col gap-4">
            <PaymentList list="order" idr="40.000"/>
            <PaymentList list="Delivery" idr="0"/>
            <PaymentList list="Tax" idr="4000"/>

          <hr/>

          <PaymentList list="Sub Total" idr="44.000"/>

        <Button destination="/history-order" value="Checkout" py="1.5"/>
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