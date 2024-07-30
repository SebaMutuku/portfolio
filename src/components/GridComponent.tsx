import {GridComponentProps} from "src/constants/types";
import {Grid, Paper} from "@mui/material";
import React from "react";

export default function GridComponent({...props}: GridComponentProps) {
    let countArray = [];
    for (let i = 0; i < props.count; i++) {
        countArray.push(i)

    }
    return (
        <Grid sx={{flexGrow: 1}} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={10}>
                    {countArray.map((value) => (
                        <Grid key={value} item>
                            <Paper
                                sx={{
                                    minHeight: 100,
                                    width: '45%',
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                {props.children}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )


}