import Image from "next/image"
import Input from "./Input"
import Links from "./Links"
import Buttons from "./Buttons"
import { AuroraText } from "@/components/ui/aurora-text"

function BottomHeader() {
    return (
        <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-10 z-40">
            <div className="container max-w-350 mx-auto px-6 py-3 flex items-center justify-between gap-8">
                <div className="flex items-center gap-3 shrink-0">
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-linear-to-br from-[#2384eb] to-[#1c6fd1] flex items-center justify-center shadow-md shadow-blue-200/50">
                        <Image
                            src="/images/logo.png"
                            width={50}
                            height={50}
                            alt="Novatek Logo"
                            className="object-contain"
                        />
                    </div>
                    <h4 className="text-xl font-bold tracking-tight">
                        <AuroraText colors={["#2384eb", "#1c6fd1", "#3A9AFF", "#60b5ff"]}>
                            Novatek
                        </AuroraText>
                    </h4>
                </div>
                <div className="hidden md:flex">
                    <Links />
                </div>
                <div className="hidden lg:flex flex-1 max-w-md">
                    <Input />
                </div>
                <div className="shrink-0">
                    <Buttons />
                </div>
            </div>
        </nav>
    )
}

export default BottomHeader