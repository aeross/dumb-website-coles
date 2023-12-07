import Cards from './(components)/CardsProduct'
import Banner from './(components)/Banner'
import { cookies } from 'next/headers'
import { ProductModel } from "@/db/models/product"
import { APIResponse } from './api/responseTypeDef'

export default async function Home() {
  const response: Response = await fetch("http://localhost:3000/api/products", {
      headers: { Cookie: cookies().toString() }
  });
  const responseJson: APIResponse<ProductModel[]> = await response.json();
  const data = responseJson.data;

  return (<>
    <Banner />
    <h1 className="heading-sm">Featured</h1>
    { data && <Cards data={data} /> }
  </>)
}
