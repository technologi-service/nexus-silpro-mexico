export interface Segmento {
    id: number | null;
    estrellas: number;
    score_min: number | string;
    score_max: number | string;
    nombre_categoria: string;
}

export interface SegmentoUpdate {
    id: number;
    estrellas: number;
    score_min: number;
    score_max: number;
    nombre_categoria: string;
}
