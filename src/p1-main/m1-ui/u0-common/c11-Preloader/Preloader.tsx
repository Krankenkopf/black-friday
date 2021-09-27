import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";

export const Preloader = () => {
    return <div
        style={{
            position: 'fixed',
            display: "flex",
            zIndex: 20,
            alignItems: "center",
            justifyContent: "center",
            textAlign: 'center',
            width: '1100px',
            height: '100%',
            backgroundColor: 'rgba(200, 200, 200, 0.3)'
        }}>
        <CircularProgress/>
    </div>
}