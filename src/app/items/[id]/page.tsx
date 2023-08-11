import { api } from "@/app/api"
import { Suspense } from "react"

// export async function generateMetaData ({ params: { id } }: { params: { id: string } }):Metadata {
//   const item = await api.item.fetch(id)

//   return {
//     title: item.title,
//     description: item.description,
//     openGraph:{
//       images:[item.thumbnail]
//     }
//   } 
// }

async function Description ({id}: {id: string}) {
  const item = await api.item.fetch(id)
  return <p>{item.description}</p>
}

async function Page ({ params: { id } }: { params: { id: string } }) {
  console.log(id)
  const item = await api.item.fetch(id)

  console.log(item)
  return <article className="grid gap-2">
    <img src={item.thumbnail} alt={item.title} />
    <h1>{item.title}</h1>
    <p className="font-bold">{Number(item.price).toLocaleString('es-AR', { style: 'currency', currency: item.currency_id })}</p>
   <Suspense fallback={<span>Descrip...</span>}>
      <Description id={id} />
    </Suspense>
  </article>
}

export default Page
