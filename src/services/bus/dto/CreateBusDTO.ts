export interface ICreateBusDTO {
    name: string;
    linha: string;
    direcao: number;
    userId: string;
}

export interface ICreateBusReturnDTO {
    name: string;
    status: string;
}
