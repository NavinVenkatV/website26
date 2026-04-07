import LanguageSwitcher from "./LanguageSwitcher";

export function Theader() {
    return (
        <div className="fixed z-20 top-0 left-0 right-0 p-2 m-3 rounded-2xl 
                        bg-neutral-900/75 backdrop-blur-xl 
                        border border-neutral-400/20 
                        shadow-2xl shadow-black/60 ">
            
            <div className="flex justify-between items-center">
                <img 
                    className="rounded-full w-12 h-12 object-cover ring-1 ring-neutral-400/30" 
                    src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg" 
                    alt="Nav" 
                />
                
                <span className="text-sm md:text-xl">
                    <LanguageSwitcher/> 
                </span>
            </div>
        </div>
    )
}