export interface CreateBoardDTO {
    id: number;
    userid: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt?: Date;
}

export interface BoardResponse {
    id: number;
    title: string;
    content: string;
    userid: number;
}