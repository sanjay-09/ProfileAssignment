export type productsTypes={
    id:string,
thumbnail:string
title:string
price:string
rating:string
reviews:string
returnPolicy:string

}

export type PaginationType={
    page:number,
    handleChange:(page:number)=>void
}