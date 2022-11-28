
const Slider = (props) => {
  return (
    <div className="flex h-screen w-screen items-center">
      <div className="h-full " style={{ backgroundColor: props.bg }}>
        <img
          className="h-full"
          src={props.img} />
      </div>

      <div className="grow p-10">
        <h1 className="text-7xl">{props.title}</h1>
        <p className="my-14 text-4xl tracking-wide">
          {props.desc}
        </p>
        <button type="button" className="border p-3 shadow">
          SHOW NOW
        </button>
      </div>
    </div>
  );
};

export default Slider;
