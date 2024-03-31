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
      <nav className="flex justify-between">
      <Link href="/" className="btn">Start</Link>
        <h1 className='font-bold'>Produktbewertung bearbeiten</h1>
        <Link href="/create" className="btn">Neue Produktbewertung hinzufügen</Link>
      </nav>
      
      {bewertungs.map(bewertung => (
        <div key={bewertung.titel} className="card"> 
          <h2>Produktbezeichnung: <input type="text" value={bewertung.titel} readOnly /></h2>
          <p>Von: <input type="text" value={bewertung.name} readOnly /></p>
          <p>Beschreibung: <input type="text" value={bewertung.beschreibung} readOnly /></p>
          <p>Bewertung von 1 bis 10: <input type="text" value={bewertung.rating} readOnly /></p>
          <div className="flex justify-between">
            <button className="btn">Produktbewertung speichern</button>
          </div>
        </div>
      ))}
    </main>
  )
}