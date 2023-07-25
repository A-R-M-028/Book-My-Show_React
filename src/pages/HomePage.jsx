import EntertainmentCardsSlider from "../components/Entertainment/EntertainmentCard";
import { Premier } from "../Premier/Premier";

const HomePage = () => {
    return(
        <><div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800">The best of Entertainment</h1>
            <EntertainmentCardsSlider/>
            <Premier/>
        </div>

        </> 
    )
  }
  
  export default HomePage;
  