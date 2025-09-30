export default function Header() {
    return (

        <header className="flex flex-col sm:flex-row md:px-6 lg:px-8 xl:px-12">
            {/*logo*/}
            <img src="/public/images/logo.svg" alt="logo" className="pl-2 size-34 sm:w-28 sm:h-28  dark:drop-shadow-white dark:drop-shadow-[-0.5px_0.2px_0.2px]" />
            {/*buscar estancia*/}
            <button className="cursor-pointer hover:bg-[#f8f5f565] active:bg-[#f8f5f565] focus:bg-[#f8f5f565] transition duration-300 w-full sm:w-[46%] lg:w-[30%] xl:w-[26%] flex items-center justify-center m-auto rounded-2xl dark:bg-gray-700 dark:hover:bg-gray-500   dark:activate:bg-gray-500 dark:focus:bg-gray-500   dark:shadow-gray-500 dark:shadow-[0px_1px_6px] shadow-[0_1px_6px_#0000001a] mr-2">
                <div className="w-[42%]  text-center sm:text-lg text-xl text-[#BDBDBD] dark:text-white">
                    Add Location
                </div>
                <div className="w-[40%] text-center sm:text-lg text-xl text-[#BDBDBD] dark:text-white py-4 border-gray-300/50 border-[0px_1px]">
                    Add Guests
                </div>
                <img className="w-[10%] pl-2" src="/public/images/search.svg" alt="search" />
            </button>
        </header>
    )
};
