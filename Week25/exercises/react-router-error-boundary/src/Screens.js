import React from "react";

export function HomeScreen() {
    return<h1>Home</h1>
}

export function ProfileScreen() {
    return<h1>Profile</h1>
}

export function ShopScreen() {
    throw new Error("Shope page crashed");
}