import { client } from "@/lib/db"
import Link from 'next/link'
import { FaTrash } from 'react-icons/fa'

const getBewertung = async () => {
  const result = await client.zRangeWithScores('bewertungs', 0, -1)

  const bewertungs = await Promise.all(result.map(b => {
    return client.hGetAll(`bewertungs:${b.score}`)
  }))

  return bewertungs
}

export default async function Home() {
  const bewertungs = await getBewertung()

  return (
    <main>
     <nav className="flex flex-col items-center">
    <h1 className='font-bold text-3xl mb-4'>Alle Produktbewertungen</h1>
    <br />
    <br />
    <Link href="/create" className="btn ml-auto">Neue Produktbewertung hinzufügen</Link>
    </nav>
      
      {bewertungs.map(bewertung => (
        <div key={bewertung.titel} className="card"> 
          <h2>Produktbezeichnung: {bewertung.titel}</h2>
          <p>Von: {bewertung.name}</p>
          <p>Beschreibung: {bewertung.beschreibung}</p>
          <p>Bewertung von 1 bis 10: {bewertung.rating}</p>
          <div className="flex justify-between">
            <Link href="/bearbeiten" className="btn">Produktbewertung bearbeiten</Link>
            <button className="btn"><FaTrash /></button>
          </div>
        </div>
      ))}
    </main>
  )
}