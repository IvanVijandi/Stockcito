import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AgregarProductoRequest } from '../types/api.types';
import { apiService } from '../services/apiService';

export const ProductosPage: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<AgregarProductoRequest>();
    const [status, setStatus] = useState<string | null>(null);

    const onSubmit = async (data: AgregarProductoRequest) => {
        try {
            data.precio = Number(data.precio);
            data.stockInicial = Number(data.stockInicial);
            const response = await apiService.agregarProducto(data);
            setStatus(`Producto creado exitosamente con ID: ${response.productoId}`);
            reset();
        } catch (error) {
            setStatus('Error al crear el producto.');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Agregar Nuevo Producto</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                <input {...register('nombre', { required: true })} placeholder="Nombre del Producto" />
                <input {...register('sku', { required: true })} placeholder="SKU" />
                <input {...register('precio', { required: true, valueAsNumber: true })} type="number" step="0.01" placeholder="Precio" />
                <input {...register('stockInicial', { required: true, valueAsNumber: true })} type="number" placeholder="Stock Inicial" />
                <button type="submit">Guardar Producto</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

