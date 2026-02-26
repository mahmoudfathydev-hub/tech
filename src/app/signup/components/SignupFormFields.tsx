import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { SignupValues } from "@/validation/signupSchema";

interface SignupFormFieldsProps {
    register: UseFormRegister<SignupValues>;
    errors: FieldErrors<SignupValues>;
}

export const SignupFormFields: React.FC<SignupFormFieldsProps> = ({ register, errors }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> Full Name
                </label>
                <Input
                    {...register("name")}
                    placeholder="John Doe"
                    className={cn(
                        "bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 transition-all h-12 rounded-xl",
                        errors.name && "border-destructive/50 focus:border-destructive"
                    )}
                />
                {errors.name && (
                    <p className="text-xs text-destructive mt-1 font-medium">{errors.name.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" /> Email Address
                </label>
                <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className={cn(
                        "bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 transition-all h-12 rounded-xl",
                        errors.email && "border-destructive/50 focus:border-destructive"
                    )}
                />
                {errors.email && (
                    <p className="text-xs text-destructive mt-1 font-medium">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" /> Password
                </label>
                <div className="relative">
                    <Input
                        {...register("password")}
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={cn(
                            "bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 transition-all h-12 rounded-xl pr-10",
                            errors.password && "border-destructive/50 focus:border-destructive"
                        )}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-xs text-destructive mt-1 font-medium">{errors.password.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" /> Confirm Password
                </label>
                <div className="relative">
                    <Input
                        {...register("confirmPassword")}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={cn(
                            "bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 transition-all h-12 rounded-xl pr-10",
                            errors.confirmPassword && "border-destructive/50 focus:border-destructive"
                        )}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="text-xs text-destructive mt-1 font-medium">{errors.confirmPassword.message}</p>
                )}
            </div>
        </div>
    );
};
