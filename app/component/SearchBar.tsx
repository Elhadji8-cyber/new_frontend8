export const SearchBarSection = function(){
    return(
        <div className="flex flex-col justify-center items-center w-full">
            <label htmlFor=""
            className="flex justify-center items-center mt-10 w-full"
            >
            <input type="text" placeholder="Recherche un logiciel, une compétence..."
            className="w-full lg:w-[60%] rounded-tl-xl rounded-bl-xl  border-2 border-yellow-500 py-2 pl-2 h-10 lg:h-20"
            />
            <button
            className="px-6 w-[40%] lg:w-30 py-2  lg:py-7 bg-yellow-500 text-white rounded-tr-xl rounded-br-xl"
            >Rechercher</button>
            </label>
        </div>
    )
}








