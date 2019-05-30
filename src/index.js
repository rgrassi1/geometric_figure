import React from 'react';

const GeometricForm = props => {

    const container = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: props.width || 200,
        height: props.width || 200,
        background: props.background || "#444",
        borderRadius: props.radius || '50%'
    }
    const text = {
        fontSize: "1.5rem",
        color: props.color || "#FFF"
    }

    return (
        <div style={container}>
            <p style={text}>
                {props.children || 'Círculo'}
            </p>
        </div>
    )
}

export default GeometricForm;
