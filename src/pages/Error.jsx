export default function Error() {
  return (
    <div className="pt-16 md:px-52 pb-28 px-16">
      <div className="grid grid-cols-1">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-bold">Oops!</h1>
        </div>
        <div className="flex items-center justify-center mt-16">
          <img
            src="src/assets/images/error.png"
            alt=""
            className="flex items-center justify-center md:max-w-48 max-w-32"
          />
        </div>
        <div className="flex items-center justify-center mt-6 text-center">
          Something went wrong... <br /> We apologise for any inconvinience this
          might cause
        </div>
      </div>
    </div>
  );
}
