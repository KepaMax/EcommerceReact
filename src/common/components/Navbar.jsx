import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import CartIcon from "../../assets/Cart.svg";
function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="px-4">
      <div className="hidden md:flex justify-between">
        <ul className="flex w-[50%] gap-8">
          <li className="flex flex-col  text-center w-[70px] h-[56px]">
            <button className="py-6 border-b-2 mt-3 border-transparent hover:text-green-400 hover:border-green-400">WOMEN</button>
          </li>
          <li className="flex flex-col text-center w-[70px] h-[56px]">
            <button className="py-6 border-b-2 mt-3 border-transparent hover:text-green-400 hover:border-green-400">MEN</button>
          </li>
          <li className="flex flex-col text-center w-[70px] h-[56px]">
            <button className="py-6 border-b-2 mt-3 border-transparent hover:text-green-400 hover:border-green-400">KIDS</button>
          </li>
        </ul>
        <button className="py-2">
          <img src={Logo} className="mt-[24px] mb-[15px]" alt="my_logo" />
        </button>
        <ul className="flex w-[50%] items-center justify-end gap-8">
          <li className="flex">
            <select className="py-6 px-4 border-b-2 border-transparent hover:border-green-400 leading-tight focus:outline-none">
              <option key="$" value="$">
                $
              </option>
              <option key="₼" value="₼">
                ₼
              </option>
            </select>
          </li>
          <li>
            <button className="p-6 border-b-2 border-transparent hover:text-green-400 hover:border-green-400">
              <img src={CartIcon} className="w-[20px] h-[20px]" alt="cart_icon" />
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:hidden">
        <div className="flex h-[75px] items-center justify-between">
          <div className="ml-5">
            <button
              onClick={() => {
                setOpenNav((preVal) => !preVal);
              }}
              className="text-black"
            >
              ☰
            </button>
          </div>
          <button>
            <img src={Logo} className="mt-[24px] mb-[15px]" alt="my_logo" />
          </button>
        </div>
        <div className={`${openNav ? "" : "hidden"}`}>
          <ul className="flex flex-col items-center mb-[25px] gap-8">
            <li className="flex px-5  flex-col text-center w-full">
              <button className="py-3 border-b-2 border-transparent hover:text-green-400 hover:border-green-400">WOMEN</button>
            </li>
            <li className="flex px-5 flex-col text-center w-full">
              <button className="py-3 border-b-2 border-transparent hover:text-green-400 hover:border-green-400">MEN</button>
            </li>
            <li className="flex px-5 flex-col text-center w-full">
              <button className="py-3 border-b-2 border-transparent hover:text-green-400 hover:border-green-400">KIDS</button>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-16">
            <li className="flex">
              <select className="rounded py-3 border-b-2 border-transparent hover:border-green-400 px-4 leading-tight focus:outline-none">
                <option key="$" value="$">
                  $
                </option>
                <option key="₼" value="₼">
                  ₼
                </option>
              </select>
            </li>
            <li>
              <button className="py-3 px-6 border-b-2 border-transparent hover:text-green-400 hover:border-green-400">
                <img src={CartIcon} className="w-[20px] h-[20px]" alt="cart_icon" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar