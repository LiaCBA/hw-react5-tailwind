function App() {
  return (
    <main className="flex lg:flex-row flex-col justify-center items-center m-auto mt-[154px]">
      <div className="flex flex-col justify-center items-center gap-[32px] bg-[#F7F6F5] w-full max-w-[430px] lg:max-w-[555px] min-h-[320px] lg:min-h-[348px] text-center">
        <h2 className="max-w-[390px] font-bold text-[#3A3845] text-[28px]">
          UP TO 40% OFF OUR CHRISTMAS COLLECTION
        </h2>
        <p className="max-w-[389px] text-[#595667]">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
        <a href="#" className="no-underline hover:no-underline">
          <button className="border-b border-black font-bold text-[#3A3845] text-[14px] cursor-pointer">
            SHOP NOW
          </button>
        </a>
      </div>
      <img
        src="/christmasmob.png"
        alt="Christmas Mobile"
        className="lg:hidden block max-w-[430px]"
      />
      <img
        src="/christmaspc.png"
        alt="Christmas Desktop"
        className="hidden lg:block max-w-[555px]"
      />
    </main>
  );
}

export default App;
