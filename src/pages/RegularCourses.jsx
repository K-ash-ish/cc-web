/* eslint-disable react/prop-types */
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
function filterMaterialByClass(material, studentClass) {
  return material.filter((data) => data.class === studentClass);
}
function filterMaterialByType(material, materialType) {
  return material.filter((data) => data.material_type === materialType);
}
function FilteredMaterial({ data }) {
  const filteredMaterial = {};
  const MATERIAL_TYPE = ["question_paper", "blog", "video", "other"];
  for (let i = 0; i < MATERIAL_TYPE.length; i++) {
    const filterItems = filterMaterialByType(data, MATERIAL_TYPE[i]);
    if (filterItems.length > 0)
      filteredMaterial[MATERIAL_TYPE[i]] = filterItems;
  }
  return (
    <>
      {Object.entries(filteredMaterial).map((material, i) => {
        return (
          <div key={i} className="mx-2 bg-gray-100 rounded-sm px-2 py-1">
            <h2 className="text-base font-semibold capitalize">
              {material[0].replace("_", " ")}
            </h2>
            {material[1].map((materialData, i) => (
              <Link
                key={i}
                to={materialData.link}
                className="text-blue-400 flex items-center gap-1 m-2 bg-white p-1 rounded-md hover:bg-gray-100  cursor-pointer"
              >
                <span>{materialData.title}</span>
                <ArrowUpRight className="text-blue-400" size={10} />
              </Link>
            ))}
          </div>
        );
      })}
    </>
  );
}

function CourseMaterial({ material }) {
  const classWiseData = {};
  //   console.log(material);
  for (let i = 1; i <= 12; i++) {
    const data = filterMaterialByClass(material, i);
    if (data.length > 0) classWiseData[`class ${i}`] = data;
  }
  if (material.length === 0) {
    return (
      <div className="flex justify-center items-center bg-white rounded-md  md:px-3 p-2  md:min-h-[600px] min-h-[500px] md:w-5/6 w-11/12 mx-auto my-4 ">
        <h1 className="text-3xl capitalize">No Material Found...!</h1>
      </div>
    );
  }

  return (
    <div className="  bg-white rounded-md  md:px-4 p-2  md:min-h-[600px] min-h-[500px] md:w-5/6 w-11/12 mx-auto my-4 ">
      <h1 className="text-2xl  font-semibold p-2 bg-gray-100  rounded-md">
        Course Material:
      </h1>
      <div className="my-4 flex flex-col   px-2 md:w-3/6 mx-auto  border-black">
        {Object.entries(classWiseData).map((data, i) => {
          return (
            <div key={i}>
              <h1 className="uppercase font-semibold text-xl">{data[0]}</h1>
              <FilteredMaterial data={data[1]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseMaterial;
