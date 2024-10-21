export default function AboutUs() {
  return (
    <div className="pt-16 pl-52 pr-52 pb-28">
      <div className="grid grid-cols-1">
        <div className=" flex items-center justify-center ">
          <h1 className="text-5xl font-bold">About Us</h1>
        </div>
        <div className=" flex items-center justify-center mt-16 text-center ">
          <iframe
            src="http://localhost:5601/app/dashboards#/view/fefd949c-4c06-4b4d-9b31-046aacb40b5b?_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&hide-filter-bar=true"
            height="800"
            width="2000"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
