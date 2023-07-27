export default function MovieHero() {
  return (
    <>
      <div className="block sm:hidden">
        {/* Small only */}
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
          alt="Poster"
        />
        <h1>S</h1>
      </div>
      <div className="hidden md:block lg:hidden">
        {/* Medium Screen */}
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
          alt="Poster"
        />
        <h1>M</h1>
      </div>
      <div className="hidden lg:block relative" style={{ height: "40rem" }}>
        {/* Big Screen */}
        <div
          className="absolute h-full w-full z-10 gradient-overlay"
          style={{
            backgroundImage: `linear-gradient(
        90deg,
        rgb(26, 26, 26) 24.97%,
        rgb(26, 26, 26) 38.3%,
        rgba(26, 26, 26, 0.04) 97.47%,
        rgb(26, 26, 26) 100%
      )`,
          }}
        />
        <div className="absolute z-20 w-64 h-86 top-32 left-32">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA5MC4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg"
            alt="Poster"
            className="h-full w-full rounded-xl"
          />
        </div>

        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
          alt="Poster"
          className="w-full"
          style={{ height: "40rem" }}
        />
        <h1>L</h1>
      </div>
    </>
  );
}
