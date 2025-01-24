import Image from "next/image";
import { FaCrown } from "react-icons/fa";
export default function Home() {
  return (
    <div className="bg-gray-500 h-[100vh] flex justify-center ">
      <div className="my-[20%]">
        <div className="bg-black h-[13rem] w-[22rem] pt-[1.7rem] rounded-xl text-center">
          {" "}
          <FaCrown className="text-yellow-500 ml-[46%] text-3xl" />
          <p className="text-5xl text-yellow-500">VIP</p>
          <div className="w-[6rem] h-[0.1rem] bg-yellow-500 ml-[36%] "></div>
          <p className="text-[0.8rem] text-yellow-500">MEMBER ONLY</p>
          <div className="bg-yellow-500 h-[1.8rem] mt-[2.2rem]"></div>
        </div>
        <div className="bg-black h-[13rem] relative text-yellow-500 mt-[3rem] w-[22rem] px-[5%] pt-[1rem] rounded-xl ">
          <p className="text-center">MEMBERSHIP CARD</p>
          <p className="text-[0.8rem] mt-2">Member Name : Sassy Chris</p>
          <p className="text-[0.8rem] mt-1">
            Member Number : 6435 - 8733 - 4678 - 2SA
          </p>
          <p className="text-[0.8rem] mt-1">Member Address : Maine</p>
          <p className="text-[0.8rem] mt-1">Exp Date : 12 - 24 - 2025</p>
          <p className="text-[0.6rem]  mt-3 mr-20">
            Do not share your card with anyone as your card number could be
            stolen and used else where.
          </p>
          <p className="text-[0.6rem] mt-1 text-white ml-[36%]">
            Signed by Managment..
          </p>
          <Image
            src="/image111.jpeg"
            width={80}
            height={75}
            className="absolute right-5 bottom-4 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
