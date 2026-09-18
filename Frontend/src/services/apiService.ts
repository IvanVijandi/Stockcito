import { 
    AgregarProductoRequest, 
    AgregarProductoResponse, 
    AgregarStockRequest, 
    ConsultarStockResponse 
} from '../types/api.types';

const API_URL = 'http://localhost:5004/api';

export const apiService = {
    async agregarProducto(request: AgregarProductoRequest): Promise<AgregarProductoResponse> {
        const response = await fetch(`${API_URL}/productos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        });
        if (!response.ok) throw new Error('Error al agregar producto');
        return response.json();
    },

    async agregarStock(request: AgregarStockRequest): Promise<void> {
        const response = await fetch(`${API_URL}/stock`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        });
        if (!response.ok) throw new Error('Error al agregar stock');
    },

    async consultarStock(productoId: string): Promise<ConsultarStockResponse> {
        const response = await fetch(`${API_URL}/stock/${productoId}`);
        if (!response.ok) throw new Error('Error al consultar stock');
        return response.json();
    }
};
