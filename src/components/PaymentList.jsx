const PaymentList = ({list, idr}) => {
  return (
    <div className="flex justify-between">
      <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">
        {list}
      </h5>
      <h5 className="font-semibold text-xs sm:text-base">{`${idr? `Idr. ${idr}.000` : 'Idr.0'}`}</h5>
    </div>
  );
};

export default PaymentList