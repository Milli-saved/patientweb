import React from "react";
import Chairs from "../../assets/waitingchairs.jpg";

const WebComponents = () => {
  return (
    <>
      <div>
        <section className="w-full min-h-[530px]">
          <div
            className="relative w-full h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${Chairs})` }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="z-10">
              <h1 className="text-[30px] md:text-[48px] text-white font-extrabold  font-work-sans text-center">
                PIMS: <br />
                <span className="text-white">
                  Patient Information Management System
                </span>
              </h1>
            </div>
          </div>
        </section>
        <section className="mt-20 mx-20 min-h-[530px]">
          <div>
            <h1 className="text-[35px] text-gray-800">Our Services</h1>
            <div className="grid grid-cols-4 gap-10 mt-20">
              <div className="shadow-xl shadow-blue-300 rounded-xl">
                <h1 className="text-[25px] text-center text-gray-800">
                  Consult a Doctor
                </h1>
                <div className="m-10">
                  <p className="text-gray-800 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia dolorem aliquid deserunt eius consectetur corrupti
                    harum, ad id nihil? Quibusdam esse ipsum nisi, doloremque
                    incidunt dolorum explicabo repellat id aspernatur laborum
                    tempora excepturi voluptatibus vero ab facere! Voluptatem
                    aliquam veritatis ipsa a odio fugit, voluptates, vero earum
                    iusto, quia quod.
                  </p>
                </div>
              </div>
              <div className="shadow-xl shadow-green-300 rounded-xl">
                <h1 className="text-[25px] text-center text-gray-800">
                  Medical Appointments
                </h1>
                <div className="m-10">
                  <p className="text-gray-800 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia dolorem aliquid deserunt eius consectetur corrupti
                    harum, ad id nihil? Quibusdam esse ipsum nisi, doloremque
                    incidunt dolorum explicabo repellat id aspernatur laborum
                    tempora excepturi voluptatibus vero ab facere! Voluptatem
                    aliquam veritatis ipsa a odio fugit, voluptates, vero earum
                    iusto, quia quod.
                  </p>
                </div>
              </div>
              <div className="shadow-xl shadow-yellow-300 rounded-xl">
                <h1 className="text-[25px] text-center text-gray-800">
                  Emergency Case
                </h1>
                <div className="m-10">
                  <p className="text-gray-800 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia dolorem aliquid deserunt eius consectetur corrupti
                    harum, ad id nihil? Quibusdam esse ipsum nisi, doloremque
                    incidunt dolorum explicabo repellat id aspernatur laborum
                    tempora excepturi voluptatibus vero ab facere! Voluptatem
                    aliquam veritatis ipsa a odio fugit, voluptates, vero earum
                    iusto, quia quod.
                  </p>
                </div>
              </div>
              <div className="shadow-xl shadow-red-300 rounded-xl">
                <h1 className="text-[25px] text-center text-gray-800">
                  24/7 Support
                </h1>
                <div className="m-10">
                  <p className="text-gray-800 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia dolorem aliquid deserunt eius consectetur corrupti
                    harum, ad id nihil? Quibusdam esse ipsum nisi, doloremque
                    incidunt dolorum explicabo repellat id aspernatur laborum
                    tempora excepturi voluptatibus vero ab facere! Voluptatem
                    aliquam veritatis ipsa a odio fugit, voluptates, vero earum
                    iusto, quia quod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebComponents;
