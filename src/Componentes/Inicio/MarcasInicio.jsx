import React from 'react';
import { IconButton, Stack } from '@mui/material';
import XIcon from '../../Image/x.png';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '50px',
};

const iconButtonStyle = {
    width: '15vw',
    height: '15vw',
    backgroundColor: '#F7F7F6',
    maxWidth: '200px',
    maxHeight: '200px',
};

const imageStyle = {
    width: '90%',
    height: '90%',
    objectFit: 'contain',
};

const MarcasInicio = () => {
    return (
        <div style={containerStyle}>
            <Stack direction="row" spacing={2}>
                <IconButton aria-label="Empresa1" style={iconButtonStyle}>
                    <img src={XIcon} alt="Empresa1" style={imageStyle} />
                </IconButton>
                <IconButton aria-label="Empresa2" style={iconButtonStyle}>
                    <img src={XIcon} alt="Empresa2" style={imageStyle} />
                </IconButton>
                <IconButton aria-label="Empresa3" style={iconButtonStyle}>
                    <img src={XIcon} alt="Empresa3" style={imageStyle} />
                </IconButton>
                <IconButton aria-label="Empresa4" style={iconButtonStyle}>
                    <img src={XIcon} alt="Empresa4" style={imageStyle} />
                </IconButton>
                <IconButton aria-label="Empresa5" style={iconButtonStyle}>
                    <img src={XIcon} alt="Empresa5" style={imageStyle} />
                </IconButton>
            </Stack>
        </div>
    );
};

export default MarcasInicio;
