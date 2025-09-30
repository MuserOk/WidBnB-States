import CantidadDeHuesped from "./cantidad-de-huesped"

export default function ModalFiltrar() {
    return (
        <>
         <div id="overlay" className="hidden fixed inset-0 bg-black/20 z-5">
            <nav id="nav" className="flex m-0 absolute top-0 inset-0 z-10 flex-col gap-6 items-center h-[80%] mb-[20%] bg-white dark:bg-gray-700 border-b-2 border-gray-800/10 lg:h-[60%] transition-transform " tabindex="-1" aria-labelledby="drawer-top-label">
            <div className="lg:hidden flex justify-between pr-8 pl-4 mt-6 items-center w-full">
                <h2 className="font-medium dark:text-gray-100">Edit your search</h2>
                <button id="btnClose" type="button" className="text-2xl font-medium hover:bg-[#eb5757]  py-1 px-3 hover:text-white hover:rounded-sm active:rounded-sm dark:text-white active:bg-[#f02f2f]">X</button>
            </div>
            <div className="lg:relative rounded-2xl border-1 border-gray-100/50 dark:bg-gray-800/20 shadow-md w-[90%] dark:shadow-gray-500 dark:shadow-[0px_1px_6px] flex flex-col  lg:items-center lg:flex-row lg:mt-20 ">
                <div className="border-b-[0.125px] lg:border-0 border-gray-50/50 w-full lg:w-[42%] px-6 pt-3 pb-2 lg:pb-3 lg:pt-2 flex flex-col">
                    <label className="font-medium text-xs dark:text-gray-50" for="">LOCATION</label>
                    <input id="inputLocation" type="text" placeholder="City, Country" className="border-none text-gray-500 text-lg outline-none focus:outline-none focus:ring-0 "/>
                </div>
                 {/*boton para cantidad huespedes*/}
                <button id="btnGuests" type="button" className="cursor-pointer w-full px-6 pt-2 pb-3 flex-col lg:w-[20%] dark:hover:bg-gray-800/40 dark:active:bg-gray-800 hover:rounded-b-2xl">
                    <p className="text-start font-medium text-xs dark:text-gray-50" for="">GUESTS</p>
                    <p id="inputCantGuests" className="text-start text-gray-500 text-lg border-none outline-none focus:outline-none focus:ring-0 ">2 guests</p>
                </button>
            </div>

            <section className="flex w-full pl-4 justify-start lg:justify-end gap-8">
                {/*sugerencias estancias*/}
                <div id="dropdown" className="z-20 hidden bg-white divide-y pl-4 divide-gray-100 rounded-lg shadow-sm w-[40%] dark:bg-gray-700">
                    <ul id="listSugCountry" className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

                    </ul>
                </div>
                
                {/*suma resta huesped*/}
                <CantidadDeHuesped/>



            </section>

             {/*boton para buscar (comenzar el filtrado)*/}
            <button  type="button" className="absolute lg:right-30 lg:top-23 lg:translate-x-0 lg:left-auto left-1/2 -translate-x-1/2 bottom-[2rem] lg:bottom-auto  cursor-pointer m-auto px-6 py-2 bg-[#eb5757] active:bg-[#f02f2f] rounded-2xl flex justify-center items-center gap-4 text-white mb-6  dark:shadow-[#ed9797] dark:shadow-[0px_0px_2px]">
                <img  className="w-[2rem] pl-2" src="/public/images/search.svg" alt="search"/>
                <p>search</p>
            </button>
        </nav>
        </div>
        </>
    )
};
