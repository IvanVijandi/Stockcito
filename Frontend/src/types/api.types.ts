export interface AgregarProductoRequest {
    nombre: string;
    sku: string;
    precio: number;
    stockInicial: number;
}

export interface AgregarProductoResponse {
    productoId: string;
}

export interface AgregarStockRequest {
    productoId: string;
    unidades: number;
    razon?: string;
}

export interface ConsultarStockResponse {
    cantidad: number;
    estado: string;
}

