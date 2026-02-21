import Image from "next/image"

interface details {
    image : string, 
    name : string, 
    bio : string, 
    stacks ?: string
}

export function Projects({image, name, bio, stacks} : details) {
    return (
        <div>
            <p className="">{name}</p>
            <Image
            className="w-full h-full mt-3 rounded-xl"
            src={`/${image}`}
            alt="image"
            width={800}
            height={800}
            ></Image>
            <p className="pt-10 bg-red-800">{bio}</p>
            <div className="mt-9">Hello navin</div>
        </div>
    )
}