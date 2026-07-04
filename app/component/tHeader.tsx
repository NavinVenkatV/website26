import LanguageSwitcher from "./LanguageSwitcher";
export function Theader() {
    return (
        <div className="fixed z-20 top-0 left-0 right-0 p-2 m-3 rounded-2xl 
                        bg-neutral-900/75 backdrop-blur-xl 
                        border border-neutral-400/20 
                        shadow-2xl shadow-black/60 ">
            <div className="md:flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="flex flex-col justify-center mr-2">
                        <img
                            className="rounded-full  w-12 h-12 object-cover ring-1 ring-neutral-400/30"
                            src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg"
                            alt="Nav"
                        />
                    </div>
                    <div className="flex flex-col justify-center text-xs md:text-lg">
                        <span className="text-white ">ML/AI Engineer
                            {/* <a className="text-neutral-500" href=""> | Building with PyTorch</a> */}
                        </span>
                    </div>
                </div>
                <span className="text-xs md:text-xl mt-1 pt-2">
                    <LanguageSwitcher />
                </span>
            </div>
        </div>
    )
}