"use client";

import React from "react";

interface FavoritesHeaderProps {
    count: number;
}

export const FavoritesHeader: React.FC<FavoritesHeaderProps> = ({ count }) => {
    return (
        <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-2">My Favorites</h1>
            <p className="text-muted-foreground text-lg">
                {count > 0
                    ? `You have ${count} items saved to your wishlist`
                    : "Your wishlist is currently empty"}
            </p>
        </div>
    );
};
