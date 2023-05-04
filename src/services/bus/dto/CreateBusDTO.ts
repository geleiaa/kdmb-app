export interface ICreateBusDTO {
    name: string;
    linha: string;
    direcao: number;
}

export interface ICreateBusReturnDTO {
    name: string;
    status: string;
}