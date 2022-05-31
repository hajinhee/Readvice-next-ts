export interface IUser{
    userId: number
    username: string
    password: string
    name: string
    email: string
    regDate: string
    token: string
    roles: string[]
}
export interface IArticle{
    artId: number,
    title?: string,
    content?: string
}
//퀘스천마크 = null 허용

export interface IBoard{

}