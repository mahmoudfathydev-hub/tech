"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FilterTagProps {
    label: string;
    type: string;
    value: string;
    onRemove: (type: string, value: string) => void;
}

export default function FilterTag({
    label,
    type,
    value,
    onRemove,
}: FilterTagProps) {
    return (
        <Badge
            variant="secondary"
            className="gap-1 pl-3 pr-1.5 py-1 text-xs font-medium cursor-pointer
                 hover:bg-destructive/10 hover:text-destructive transition-colors group"
            onClick={() => onRemove(type, value)}
        >
            {label}
            <X className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Badge>
    );
}
