export interface BusForecastNormalized {
    hratual: string;
    previsao: string;
    parada: string;
}

export interface GetForecastReturn {
    hr: string;
    p: {
        cp: number;
        np: string;
        py: number;
        px: number;
        l: [
            {
                c: string;
                cl: number;
                sl: number;
                lt0: string;
                lt1: string;
                qv: number;
                vs: [
                    {
                        p: number;
                        t: string;
                        a: boolean;
                        ta: string;
                        py: number;
                        px: number;
                    },
                ];
            },
        ];
    };
}
