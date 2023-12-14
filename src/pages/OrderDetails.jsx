import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CardProductOrder from '../components/CardProductOrder'
import ListOrderInformation from '../components/ListOrderInformation'

const OrderDetails = () => {
  const cards = [1, 2, 3, 4]
    return (
        <body className="flex flex-col items-center">
            
      <Navbar/>


        <div className="flex flex-col gap-2 w-5/6 mt-20 sm:mt-24 mb-6">
          <h1 className="text-xl sm:text-3xl">
            Order <span className="font-bold">#12354-09893</span>
          </h1>
          <p className="text-[#4F5665] text-xs sm:text-sm">21 March 2023 at 10:30 AM</p>
        </div>
    
        <div className="w-5/6 flex flex-col sm:flex-row gap-4 h-fit sm:h-96 mb-16">
          <div className="w-full sm:flex-1 flex flex-col gap-6">
            <h1 className="font-semibold text-base sm:text-xl">Order Information</h1>
    
            <div className="flex flex-col divide-y">
              <ListOrderInformation field="Full Name" value="Ghaluh Wizard Anggoro"/>
              <ListOrderInformation field="Address" value="Griya bandung indah"/>
              <ListOrderInformation field="Phone" value="082116304338"/>
              <ListOrderInformation field="Payment Method" value="Cash"/>
              <ListOrderInformation field="Shipping" value="Dine In"/>
              <ListOrderInformation field="Status" value="Done" color="#00A700"/>
              <ListOrderInformation field="Total Transaksi" value="40" color="#FF8906"/>
            </div>
          </div>
    
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Your Order</h4>
    
            <div className="flex flex-col gap-3 sm:gap-5 overflow-y-auto max-h-[22rem] sm:max-h-[21rem]">
              {
                cards.map(index => (
                  <CardProductOrder key={index}
                  productName="Hazelnut Latte" quantity="2" size="Regular" variant="Ice" delivery="Dine in"/>
                ))
              }
            </div>
          </div>
        </div>

      <Footer/>
      </body>
    )
}

export default OrderDetails