import { client } from "../lib/sanityClient"
import imageUrlBuilder from '@sanity/image-url'

async function GetProductsData() {
  const res = await client.fetch(`*[_type == "productsan"]`)
  return res;
}
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}
async function Fetch() {
  const data = await GetProductsData();
  return (
    <div>
      {data.map((elem: any) => (
        <div key={elem._id}>
          <p>Title: {elem.title}</p>
          <p>Price: {elem.Price}</p>
          {elem.image && (
            <img
              src={urlFor(elem.image[0]).width(300).url()} 
              alt={`Image for ${elem.title}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}


export default Fetch;