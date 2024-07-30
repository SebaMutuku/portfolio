import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardProps} from "../constants/types";
import {appColors} from "../constants/constants";


export default function CardComponent({...props}: CardProps) {
    return (
        <Card sx={{
            width: "100%",
            background: appColors.primary
        }} className={props.className} variant="outlined">
            <CardContent>
                {props.cardContent}
            </CardContent>
        </Card>
    );
}
