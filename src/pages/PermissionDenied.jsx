export default function PermissionDenied() {
  return (
    <div className="pt-16 md:pl-52 md:pr-52 pb-28 pl-10 pr-10">
      <div className="grid grid-cols-1">
        <div className=" flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center">
            We couldn't get your location
          </h1>
        </div>
        <div className=" flex items-center justify-center mt-16">
          <img
            src="src/assets/images/no-location.png"
            alt=""
            className="flex items-center justify-center max-w-36"
          />
        </div>
        <div className=" flex items-center justify-center mt-16 text-center ">
          This was either because you did not give us permission to access your
          location, or because of technical issues...
        </div>
        <div className=" flex items-center justify-center mt-4 text-center ">
          However, you can still use our services to view weather details for
          locations all over the world!
        </div>
      </div>
    </div>
  );
}
