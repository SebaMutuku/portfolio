import React from "react";
import {GridProps} from "@mui/material";

export interface CardProps {
    cardContent: React.ReactNode,
    className?: string;

}

export interface GridComponentProps extends GridProps {
    count: number;
    spacing?: number | 2,
    height?: any | "100%",
    width?: any | "100%"
}