
import stand from "../public/assests/stand.png";
import paper from "../public/assests/paper.png";
import brownChair from "../public/assests/brownchair.png";
import whiteDining from "../public/assests/white-dinning.png";
import bed from "../public/assests/bed.png";
import mirror from "../public/assests/mirror.png";
import spoon from "../public/assests/spoon.png";
import frame from "../public/assests/frame.png";
import camera from "../public/assests/camera.png";
import Image from "next/image";




function ImagesFile() {
  return (
    <div className="h-[600px] w-[380vw] md:w-[150vw] col  flex items-center gap-4 hide-scrollbar ">
      <div className="flex flex-col gap-4">
        <Image alt="furniture" src={stand} className="h-[200px] object-cover w-full" />
        <Image alt="furniture" src={brownChair} className="h-[300px] object-cover w-full" />
      </div>

      <div className="flex flex-col gap-4">
        <Image alt="furniture" src={paper} className="h-[300px] object-cover w-auto" />
        <Image alt="furniture" src={camera} className="h-[200px] object-cover w-auto" />
      </div>

      <div>
        <Image alt="furniture" src={whiteDining} className="h-[400px] object-cover w-auto" />
      </div>

      <div className="flex-col flex gap-2">
        <Image alt="furniture" src={bed} className="h-[300px] object-cover w-auto" />
        <div className="flex gap-2 ">

        <Image alt="furniture" src={frame} className="h-[200px] w-[200px] object-cover" />
        <Image alt="furniture" src={spoon} className="h-[250px] w-auto object-cover" />
        </div>
      </div>
      <div className="flex gap-4">
        <Image alt="furniture" src={mirror} className="h-[500px] w-auto object-cover" />
      </div>

     
    </div>
  );
}

export default ImagesFile;


