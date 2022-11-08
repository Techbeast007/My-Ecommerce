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
  }).catch((error) => {
    console.log(error)
  })

}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await DataCall()
  const {
    query: { pid },
  } = req

  const product = homepageQuerys.find((x: any) => x.id == pid);
  console.log(product)

  res.status(200).json(product);

  // res.status(200).json(product);
}
