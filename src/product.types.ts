

export type PaginationType = {
    page: number,
    handleChange: (page: number) => void
}
export type newProductType={
   
    img: string,
      title: string,
      reviews: string,
      prevPrice: string,
      newPrice: string,
      company:string,
      color: string,
      category: string,
      totalStar: number,
      id:number,
      quantity?:number
}


