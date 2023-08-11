import { api } from "@/app/api"

async function Page ({ params: { id } }: { params: { id: string } }) {
  console.log(id)
  const item = await api.item.fetch(id)

  console.log(item)
  return <article className="grid gap-2">
    <img src={item.thumbnail} alt={item.title} />
    <h1>{item.title}</h1>
    <p className="font-bold">{Number(item.price).toLocaleString('es-AR', { style: 'currency', currency: item.currency_id })}</p>
    <p>{item.description}</p>
  </article>
}

export default Page
