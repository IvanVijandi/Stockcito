import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AgregarStockRequest, ConsultarStockResponse } from '../types/api.types';
import { apiService } from '../services/apiService';

export const StockPage: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<AgregarStockRequest>();
    const [consultaId, setConsultaId] = useState('');
    const [stockResult, setStockResult] = useState<ConsultarStockResponse | null>(null);
    const [status, setStatus] = useState<string | null>(null);

    const onAddStock = async (data: AgregarStockRequest) => {
        try {
            data.unidades = Number(data.unidades);
            await apiService.agregarStock(data);
            setStatus('Stock agregado exitosamente.');
            reset();
        } catch (error) {
            setStatus('Error al agregar stock.');
        }
    };

    const handleConsultar = async () => {
        if (!consultaId) return;
        try {
            const result = await apiService.consultarStock(consultaId);
            setStockResult(result);
            setStatus(null);
        } catch (error) {
            setStatus('Error al consultar stock. Verifica el ID.');
            setStockResult(null);
        }
    };

    return (
        <div style={{ padding: '20px', display: 'flex', gap: '40px' }}>
            <div>
                <h2>Agregar Stock</h2>
                <form onSubmit={handleSubmit(onAddStock)} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                    <input {...register('productoId', { required: true })} placeholder="ID del Producto (Guid)" />
                    <input {...register('unidades', { required: true, valueAsNumber: true })} type="number" placeholder="Unidades a sumar" />
                    <input {...register('razon')} placeholder="Razón (opcional)" />
                    <button type="submit">Agregar Stock</button>
                </form>
                {status && <p>{status}</p>}
            </div>

            <div>
                <h2>Consultar Stock</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input 
                        value={consultaId} 
                        onChange={e => setConsultaId(e.target.value)} 
                        placeholder="ID del Producto" 
                    />
                    <button onClick={handleConsultar}>Consultar</button>
                </div>
                {stockResult && (
                    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                        <p><strong>Cantidad actual:</strong> {stockResult.cantidad}</p>
                        <p><strong>Estado:</strong> {stockResult.estado}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

