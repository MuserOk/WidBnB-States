export default function CantidadDeHuesped() {
    return(
        <>
        {/*botones para seleccionar cantidad de huespedes*/}
                <div className="hidden flex-col lg:items-center lg:w-[16%] mx-4 gap-6 lg:gap-2 ">
                    <div className="py-2 lg:py-0">
                        <h5 className="font-medium ">Adult</h5>
                        <p className="text-gray-300/50 font-light pb-2 ">Ages 13 or above</p>
                        <div className="flex w-auto justify-between items-center ">
                            <form className="w-full">
                                <div className="relative flex justify-between">
                                    <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="cursor-pointer border-1 w-6 h-6 rounded-sm text-gray-400/90 border-gray-400/90 bg-gray-300/50 p-1 flex justify-center items-center shrink-0 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 dark:active:bg-gray-700 hover:bg-gray-200 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">-</button>
                                    <input type="text" id="counter-input" data-input-counter className="shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="2" required />
                                    <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="cursor-pointer border-1 w-6 h-6 rounded-sm text-gray-400/90 border-gray-400/90 bg-gray-300/50 p-1 flex justify-center items-center shrink-0 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 dark:active:bg-gray-700 hover:bg-gray-200 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">+</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="py-2 ">
                        <h5 className="font-medium ">Children</h5>
                        <p className="text-gray-300/50 font-light pb-2 ">Ages 13 or above</p>
                        <div className="flex w-auto justify-between items-center ">
                            <form className="w-full">
                                <div className="relative flex justify-between">
                                    <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="cursor-pointer border-1 w-6 h-6 rounded-sm text-gray-400/90 border-gray-400/90 bg-gray-300/50 p-1 flex justify-center items-center shrink-0 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 dark:active:bg-gray-700 hover:bg-gray-200 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">-</button>
                                    <input type="text" id="counter-input" data-input-counter className="shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="0" required />
                                    <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="cursor-pointer border-1 w-6 h-6 rounded-sm text-gray-400/90 border-gray-400/90 bg-gray-300/50 p-1 flex justify-center items-center shrink-0 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 dark:active:bg-gray-700 hover:bg-gray-200 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">+</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-[36%]">
                        
                </div>
        
        </>
    )
    
};
