export default function CompareVehicles() {
  return(
    <section className="w-full flex justify-center items-center py-10 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-10 lg:flex-row justify-between py-10 rounded-2xl px-6 lg:px-12 lg:items-center" id="lau">
        <div className="flex gap-3 w-full lg:w-100 flex-col">
          <h1 className="text-[24px] leading-8 lg:text-[32px] lg:leading-11.25 font-semibold text-[#f9fafb]">Ready to Experience Sustainable Mobility?</h1>
          <p className="lg:text-[15px] text-[16px] text-[#f3f4f6]">Book a test ride and discover the future of driving with EVORA.</p>
          <button className="bg-[#10b981] py-2.75 w-fit px-5 rounded-md text-[15px] lg:text-[14px] text-[#f9fafb] font-medium">
            Book a Test Ride
          </button>
        </div>
      </div>
    </section>
  );
}
