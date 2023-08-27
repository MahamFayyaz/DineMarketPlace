export interface slugType {
    _type: string,
    current: string,
};

export interface assetImageType {
    _type: string,
    _ref: string,
};
export interface imagesType {
    asset: assetImageType,
    _type: string,
    alt: string,
    _key: string,
}


export interface oneProductType {
    title:string,
    slug: slugType,
    quantity: number,
    _rev: string,
    _type: string,
    _createdAt: string,
    _id: string,
    _updatedAt: string,
    Image: Array<imagesType>
    description: any,
    productTypes: Array<string>,
    size: Array<string>,
    Price: number,
}

export interface responseType {
    result: Array<oneProductType>
}