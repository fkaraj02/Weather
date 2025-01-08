export default function CardError() {
  return (
    <div className="pt-10 pl-52 pr-52 pb-10">
      <div className="grid grid-cols-1">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold">Something went wrong...</h1>
        </div>
        <div className="flex items-center justify-center mt-10">
          <img
            src="src/assets/images/error.png"
            alt=""
            className="flex items-center justify-center max-w-28"
          />
        </div>
        {/* <div className="flex items-center justify-center mt-6 text-center">
          Something went wrong... <br /> We apologise for any inconvinience this
          might cause
        </div> */}
      </div>
    </div>
  );
}
