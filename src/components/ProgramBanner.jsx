function ProgramBanner({ title, description, elements }) {
  return (
    <div className="card flex flex-col  justify-center p-4 bg-gray-800 text-white rounded-md min-h-[360px]">
      <h1 className="text-2xl font-semibold capitalize">{title}</h1>
      <p className="font-thin text-base text-gray-400   mt-1 ">{description}</p>
      <div className="flex flex-row flex-wrap gap-2 justify-around my-2 ">
        {elements?.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-start border p-3 rounded-xl w-[240px] h-[120px] gap-4 bg-slate-900 text-white my-4"
          >
            {item?.icon}{" "}
            <h2 className="text-xl font-semibold capitalize">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramBanner;
