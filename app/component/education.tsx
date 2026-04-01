import Image from "next/image";
import { useTranslations } from 'next-intl';

// interface details {
//     name: string,
//     year: Int16Array
// }

export function Education() {
    const t = useTranslations('Education');
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
                        <p className="font-bold text-white flex justify-center items-center">{t('school')}</p>
                        <p className="">{t('degree')}</p>
                    </div>
                    <div className="text-neutral-500">{t('year')}</div>
                </div>
            </div>
            <div></div>
        </div>
    )
}