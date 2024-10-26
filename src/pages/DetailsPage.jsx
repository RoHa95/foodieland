import { useFoodDetails } from "../context/FoodsContext";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// loader
import { Bars } from "react-loader-spinner";

function DetailsPage() {
  
  const { id } = useParams();
  const data = useFoodDetails(+id);
   console.log(id);
  // const { name, image, details, price, introduction, ingredients, recipe } =
  //   data;

  // useEffect(() => {
  //   setfoods(useFoods());
  // }, []);
 if(!data) return (
 <div className=" w-full h-full flex justify-center items-center"><Bars/></div>)
  return (
    <>
      <Navbar />
        <div className="w-full flex flex-col container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-24 py-6">
          <div className=" w-full flex items-center justify-between border border-x-0 border-t-0 border-b-2 pb-8">
            <img src={data.image} className=" w-2/3 h-auto" />
            <div className=" w-1/3 flex flex-col justify-start px-10">
              <h1 className=" font-bold text-[40px]">{data.name}</h1>
              <p className=" text-sm text-gray-500 font-medium text-justify mt-4">
                {data.introduction}
              </p>
              <h3 className=" font-bold text-lg pt-4">ingredients:</h3>
              <div className=" px-2">
                {data.ingredients.map((item) => (
                  <p key={item} className=" text-base font-medium">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-full">
            <h3 className=" font-bold text-[40px] pl-3">Recipe </h3>
            <p className=" p-3 text-justify">{data.recipe}</p>
          </div>
        </div>
      

      <Footer />
    </>
  );
}

export default DetailsPage;
