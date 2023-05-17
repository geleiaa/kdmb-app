export interface BusInfo {
    name: string;
    linha: string;
    direcao: number; // 1 = t. principal, 2 = t. secundario
    paradas: string[];
    previsao: string;
}

// Api STP reponse data

export interface GetLineReturn {
    cl: number;
    lc: boolean;
    lt: string;
    sl: number;
    tl: number;
    tp: string;
    ts: string;
}

export interface GetStopsReturn {
    cp: number;
    np: string;
    ed: string;
    py: number;
    px: number;
}

export interface GetForecastReturn {}
