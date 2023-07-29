import EntertainmentCardsSlider from "../components/Entertainment/EntertainmentCard";
import { Premier } from "../Premiere/Premiere";
import PosterSlider from "../components/PosterSlider/PosterSlider";
import PosterTemp from "../components/Config/PosterTemp";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">
            The best of Entertainment
          </h1>
          <EntertainmentCardsSlider />
        </div>
        <div className="bg-navCol-900 py-16">
          <div className="container mx-auto px-4">
            <div className="flex">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="Banner"
                className="w-full h-full"
              />
            </div>
            {/* <Premier /> -> Replaced Dynamically (Common Now)*/}
            <PosterSlider
              images={PosterTemp}
              title="Premiere"
              subtitle="Brand New Release Every Friday"
            />
          </div>
        </div>
        <div className="container mx-auto px-8">
          <h1>
            <PosterSlider
              images={PosterTemp}
              title="Online Streaming Events"
              isDark={false}
            />
          </h1>
        </div>
        {/* Just reuse code copy - paste */}
        <div className="container mx-auto px-8">
          <h1>
          {/* Outdoor Events */}
            <PosterSlider
              images={PosterTemp}
              title="Outdoors Events"
              isDark={false}
            />
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
