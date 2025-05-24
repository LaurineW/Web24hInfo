"use client";
import { cn } from "@/lib/utils";

export function CardDemo({data}) {
    return (
        <div className="w-full">
            <div
                className={cn(
                    "group cursor-pointer overflow-hidden relative card h-[32rem] rounded-md shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-cover bg-center",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
                style={{
                    backgroundImage: `url(${data.images[0]})`,
                }}
            >
                <div className="text relative z-50">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50">{data.nom}</h1>
                    <p className="font-normal text-sm text-gray-100 mt-2 whitespace-pre-line">
                        {data.texte}
                    </p>
                </div>
            </div>
        </div>
    );
}
