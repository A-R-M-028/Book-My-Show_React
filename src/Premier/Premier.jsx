// Import
import Slider from "react-slick";
import Poster from "../components/Poster/Poster";

export const Premier = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
  };

//   Create a Dataset
const PremierImages = [
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA4M0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
        alt: "Mission Impossible: Dead Reckoning - Part One",
        title: "Mission Impossible: Dead Reckoning - Part One",
        subtitle: " Action, Adventure,Thriller"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA4M0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
        alt: "Mission Impossible: Dead Reckoning - Part One",
        title: "Mission Impossible: Dead Reckoning - Part One",
        subtitle: " Action, Adventure,Thriller"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA4M0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
        alt: "Mission Impossible: Dead Reckoning - Part One",
        title: "Mission Impossible: Dead Reckoning - Part One",
        subtitle: " Action, Adventure,Thriller"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA4M0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
        alt: "Mission Impossible: Dead Reckoning - Part One",
        title: "Mission Impossible: Dead Reckoning - Part One",
        subtitle: " Action, Adventure,Thriller"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA4M0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
        alt: "Mission Impossible: Dead Reckoning - Part One",
        title: "Mission Impossible: Dead Reckoning - Part One",
        subtitle: " Action, Adventure,Thriller"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA4M0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
        alt: "Mission Impossible: Dead Reckoning - Part One",
        title: "Mission Impossible: Dead Reckoning - Part One",
        subtitle: " Action, Adventure,Thriller"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA4M0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
        alt: "Mission Impossible: Dead Reckoning - Part One",
        title: "Mission Impossible: Dead Reckoning - Part One",
        subtitle: " Action, Adventure,Thriller"
    }
]

  return (
    // { ...image} -> This is for 1 iamge and it's property to Poster
    <>
      {/* From Slick documentation */}
      <Slider { ...settings}>
      {PremierImages.map((image) => (
          <Poster { ...image} />
        ))}
      </Slider>
    </>
  );
};
