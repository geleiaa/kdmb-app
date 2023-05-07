export interface ICreateBusDTO {
    name: string;
    linha: string;
    direcao: number;
    userId: any;
}

export interface ICreateBusReturnDTO {
    name: string;
    status: string;
}

export interface IFindAllBusResponseDTO {
    //id: string;
    name: string;
    linha: string;
    direcao: number;
    userId: any;
};