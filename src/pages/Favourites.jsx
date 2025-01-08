import { useEffect, useState } from "react";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";

export default function Favourites() {
  var keys = Object.keys(localStorage);
  const [hasChanged, setHasChanged] = useState(false);
  useEffect(() => {
    keys = Object.keys(localStorage);
    setHasChanged(false);
  }, [hasChanged]);

  return (
    <div className="pt-16 pb-28 px-16">
      <div className="grid grid-cols-1">
        <div className="flex items-center justify-center ">
          <h1 className="text-5xl font-bold">Favourites</h1>
        </div>
        <div className=" flex items-center justify-center mt-8 text-center ">
          <div className="grid grid-cols-1">
            <div className="grid grid-cols-1">
              <p>This is page displays all of you saved locations.</p>
              <p> Feel free to add as many as you wish!</p>
            </div>

            <div className=" flex items-center justify-center mt-8 text-center ">
              <div className="grid grid-cols-1">
                {keys.length == 0 && (
                  <div className="md:my-24 mt-10">
                    <div className="flex items-center justify-center">
                      <img
                        src="src/assets/images/empty.png"
                        className=" max-md:h-48"
                        alt=""
                      />
                    </div>
                    <h1 className="text-xl mt-10">
                      Start saving locations by clicking the "Favourite" button
                      and check back here again!
                    </h1>
                  </div>
                )}
                <div className="max-lg:hidden">
                  {keys.map((item) => (
                    <Card
                      key={item}
                      lat={JSON.parse(localStorage.getItem(item)).lat}
                      lon={JSON.parse(localStorage.getItem(item)).lon}
                      setHasChanged={setHasChanged}
                    />
                  ))}
                </div>
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 md:gap-10">
                  {keys.map((item) => (
                    <SmallCard
                      key={item}
                      lat={JSON.parse(localStorage.getItem(item)).lat}
                      lon={JSON.parse(localStorage.getItem(item)).lon}
                      setHasChanged={setHasChanged}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
