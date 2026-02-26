import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessStateProps {
    onGoBack: () => void;
}

export const SuccessState: React.FC<SuccessStateProps> = ({ onGoBack }) => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-8"
        >
            <div className="mb-6 flex justify-center">
                <CheckCircle2 className="w-20 h-20 text-green-500 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Welcome aboard!</h2>
            <p className="text-muted-foreground mb-8">
                Your account has been created successfully and saved to local storage.
            </p>
            <Button
                onClick={() => window.location.href = "/"}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-3 rounded-full shadow-lg shadow-primary/20"
            >
                Go to Dashboard
            </Button>
        </motion.div>
    );
};
