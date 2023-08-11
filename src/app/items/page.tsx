import Link from 'next/link'

// https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4
interface Item {
  id: string
  title: string
  thumbnail: string
  price: number
  currency_id: string
  seller_address: {
    city: {
      name: string
    }
  }
}
async function Page ({ searchParams }: { searchParams: { search: string } }) {
  const { results } = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.search}&limit=4`
  ).then(async (res) => await res.json())
  console.log(results)
  return (
    <section>
      <article>
        {results.map((item: Item) => (
          <Link href={'/items/' + item.id} key={item.id} className="flex gap-4">
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <p className="font-bold">{Number(item.price).toLocaleString('es-AR', { style: 'currency', currency: item.currency_id })}</p>
              <p>{item.title}</p>
            </div>
            <span className="ml-auto text-sm capitalize opacity-50" >{item.seller_address.city.name.toLowerCase()}</span>
          </Link>
        ))}
      </article>
    </section>
  )
}

export default Page
