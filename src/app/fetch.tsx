import { client } from "../lib/sanityClient"

async function GetProductsData() {
  const res = await client.fetch(`*[_type == "productsan"]`)
  return res;
}

async function Fetch() {
  const data = await GetProductsData()
  return <div>
    {data.map((elem: any) => (
      <div>
        <p>Title: {elem.title}</p>
        <p>Category: {elem.Category}</p>
        <p>Price: {elem.Price}</p>
      </div>
    ))}
  </div>;
}

export default Fetch;