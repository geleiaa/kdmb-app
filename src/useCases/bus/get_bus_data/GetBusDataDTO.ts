export interface BusInfoNormalized {
    name: string;
    linha: string;
    direcao: number;
    paradas: string;
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
