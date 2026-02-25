import Image from "next/image";
import { AuroraText } from "@/components/ui/aurora-text";

function Logo() {
    return (
        <div className="flex items-center gap-3 shrink-0">
            <div
                className="relative w-10 h-10 overflow-hidden rounded-xl bg-linear-to-br from-[#2384eb] to-[#1c6fd1] 
                flex items-center justify-center shadow-md shadow-blue-200/50"
            >
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
    );
}

export default Logo;
