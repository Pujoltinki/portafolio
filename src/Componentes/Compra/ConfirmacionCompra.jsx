import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CardContext';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ConfirmarProductos from './ConfirmarProductos';
import DatosEntrega from './DatosEntrega';
import Resumen from './Resumen';
import SeleccionMedioPago from './SeleccionMedioPago'; // Importa el nuevo componente
import mediosPago from '../../Data/medios_pago.json';
import comunas from '../../Data/comuma.json';

const steps = ['Confirmar productos', 'Datos de entrega', 'Resumen'];

const ConfirmacionCompra = () => {
    const { carrito, precioTotal, eliminarProducto, vaciarCarrito } = useContext(CartContext);
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [selectedComuna, setSelectedComuna] = useState('');
    const [comunaPrecio, setComunaPrecio] = useState(null);
    const [direccion, setDireccion] = useState('');
    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
    const [rut, setRut] = useState('');
    const [telefono, setTelefono] = useState('');
    const [calcularHabilitado, setCalcularHabilitado] = useState(false);
    const [precioVisible, setPrecioVisible] = useState(false);
    const [medioPago, setMedioPago] = useState('');

    const totalSteps = () => steps.length;

    const completedSteps = () => Object.keys(completed).length;

    const isLastStep = () => activeStep === totalSteps() - 1;

    const allStepsCompleted = () => completedSteps() === totalSteps();

    const handleNext = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);

        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        vaciarCarrito();
    };

    const handleEliminarProducto = (idProducto) => {
        eliminarProducto(idProducto);
    };

    const handleComunaChange = (event) => {
        const comunaSeleccionada = comunas.find(comuna => comuna.nombre === event.target.value);
        setSelectedComuna(event.target.value);
        setComunaPrecio(comunaSeleccionada ? comunaSeleccionada.precio : null);
        setPrecioVisible(false);
        setCalcularHabilitado(false);
    };

    const handleDireccionChange = (event) => {
        setDireccion(event.target.value);
    };

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleRutChange = (event) => {
        setRut(event.target.value);
    };

    const handleTelefonoChange = (event) => {
        setTelefono(event.target.value);
    };

    const handleMedioPagoChange = (event) => {
        setMedioPago(event.target.value);
    };

    const handleCalcular = () => {
        if (selectedComuna && direccion && correo && nombre && rut && telefono) {
            setCalcularHabilitado(true);
            setPrecioVisible(true); // Mostrar el precio después de presionar "Calcular"
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <SeleccionMedioPago
                        medioPago={medioPago}
                        mediosPago={mediosPago}
                        handleMedioPagoChange={handleMedioPagoChange}
                        handleReset={handleReset}
                    />
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}></Typography>
                        <div className="container">
                            {activeStep === 0 && (
                                <ConfirmarProductos
                                    carrito={carrito}
                                    precioTotal={precioTotal}
                                    handleEliminarProducto={handleEliminarProducto}
                                />
                            )}
                            {activeStep === 1 && (
                                <DatosEntrega
                                    selectedComuna={selectedComuna}
                                    comunaPrecio={comunaPrecio}
                                    direccion={direccion}
                                    correo={correo}
                                    nombre={nombre}
                                    rut={rut}
                                    telefono={telefono}
                                    precioVisible={precioVisible}
                                    handleComunaChange={handleComunaChange}
                                    handleDireccionChange={handleDireccionChange}
                                    handleCorreoChange={handleCorreoChange}
                                    handleNombreChange={handleNombreChange}
                                    handleRutChange={handleRutChange}
                                    handleTelefonoChange={handleTelefonoChange}
                                    handleCalcular={handleCalcular}
                                    calcularHabilitado={calcularHabilitado}
                                />
                            )}
                            {activeStep === 2 && (
                                <Resumen
                                    carrito={carrito}
                                    precioTotal={precioTotal}
                                    comunaPrecio={comunaPrecio}
                                    nombre={nombre}
                                    rut={rut}
                                    telefono={telefono}
                                    correo={correo}
                                    direccion={direccion}
                                    selectedComuna={selectedComuna}
                                />
                            )}
                        </div>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0 || carrito.length === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Atrás
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button
                                onClick={handleNext}
                                sx={{ mr: 1 }}
                                disabled={
                                    (activeStep === 1 && !calcularHabilitado) ||
                                    (activeStep === 0 && carrito.length === 0)
                                }
                            >
                                Siguiente
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
};

export default ConfirmacionCompra;
