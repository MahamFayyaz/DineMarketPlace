export const productsan = {
  name: "productsan",
  type: "document",
  title: "ProductSan",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title:"slug",
      name:"slug",
      type:"slug",
      options:{
        source:"title",
        maxLength:200,
        slugify:(input:any)=>input
        .toLowerCase()
        .replace(/\s+/g,'-')
        .slice(0,200)
      }
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of:[
        {
          type:"block"
        }
      ]
    },
    {
      name: "Image",
      title: "ProductImage",
      type: "array",
      of:[
        {
          type:"image",
          field:[
            {
              name:"alt",
              type:"text",
              title:"Alternative Text"
            }
          ]
        }
      ]
    },
    {
      name:'productTypes',
      type:"array",
      title:"ProductType",
      of:[{type:"string"}]
    },
    {
      name:"listedDate",
      type:"datetime",
      title:"ListedData"
    },
    {
      name: "Price",
      title: "ProductPrice",
      type: "number",
    },
    {
      name:'size',
      type:"array",
      title:"Sizes",
      of:[{type:"string"}]
    },
    {
      name:"quantity",
      type:"number",
      title:"Quantity"
    }
  ],
};
