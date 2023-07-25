// props -> src, title, subtitle, isDark(bool)
export const Poster = (props) => {
  return (
    <>
      {/* Recommended Movies */}
      <div className="flex flex-col items-start gap-2 px-3">
        {/* Parent */}
        <div className="h-80">
          {/* Image */}
          <img src={props.src} className="w-full h-full rounded-xl"/>
        </div>
        <div className={'${props.isDark? "text-white": "text-gray-700"}'}>
          <h3 className="text-lg font-bold ">{props.title}</h3>
          <p className="text-sm font-bold ">{props.subtitle}</p>
        </div>
      </div>
    </>
  );
};


export default Poster;
