import groq from 'groq';
import client from 'lib/sanity';
import type { NextApiRequest, NextApiResponse } from 'next';


// fake data


let homepageQuerys: any = []
const DataCall = async () => {




  return await client.fetch(groq`*[_type == "ecom"]{
    id,
name,
  price,
  quantityAvailable,
  discount,
  category,
  images,
  currentPrice,
  sizes,
  description
  
}`).then(function (res) {
    homepageQuerys = res
    console.log(res)
  })

}









export default async (req: NextApiRequest, res: NextApiResponse) => {
  await DataCall()

  console.log(req);
  console.log(homepageQuerys)

  // fake loading time
  setTimeout(() => {
    res.status(200).json(homepageQuerys);
  }, 800);
}
