import Cards from './(components)/CardsProduct'
import Banner from './(components)/Banner'
import { cookies } from 'next/headers'
import { ProductModel } from "@/db/models/product"
import { APIResponse } from './api/responseTypeDef'

export default async function Home() {
  const response: Response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/products?limit=5&page=1", {
      headers: { Cookie: cookies().toString() }
  });
  console.log(process.env.NEXT_PUBLIC_URL);
  const responseJson: APIResponse<ProductModel[]> = await response.json();
  const data = responseJson.data;

  return (<>
    <Banner />
    <h1 className="heading-sm">Featured</h1>
    { data && <Cards data={data} /> }
  </>)
}
