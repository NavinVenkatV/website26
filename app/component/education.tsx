import Image from "next/image"

// interface details {
//     name: string,
//     year: Int16Array
// }

export function Education() {
    return (
        <div className="mt-4">
            <div className="flex gap-4">
                <Image
                    className="rounded-full flex flex-col justify-center items-center w-[70] h-[50]"
                    src={'/Epita.png'}
                    width={50}
                    height={50}
                    alt="logo"
                >
                </Image>
                <div className="md:flex md:justify-between w-full text-xs md:text-lg">
                    <div>
                        <p className="font-bold flex justify-center items-center">EPITA, l'école des ingénieurs en intelligence informatique</p>
                        <p className="text-sm ">Master of Science in Computer Science</p>
                    </div>
                    <div className="text-neutral-500">2025-26</div>
                </div>
            </div>
            <div></div>
        </div>
    )
}