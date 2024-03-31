'use client'

import Link from 'next/link'
import { createBewertung } from '@/app/actions/create'
import { useState } from "react"


export default function Create() {
  const [error, setError] = useState('')

  async function handleSubmit(formData) {
    const result = await createBewertung(formData)

    if (result?.error) {
      setError(result.error)
    }
  }

  return (
   

    <main style={{ padding: '20px', backgroundColor: '#ffffff' }}>
      <Link href="/" className="link" style={{ textDecoration: 'none', color: '#000000' }}>Zurück zu den Produktbewertungen</Link>
      <form action={handleSubmit} style={{ display: 'flex', fontSize: '20px', flexDirection: 'column', marginTop: '20px' }}>
        <br />
        <h2 style={{ color: '#333', fontSize: '21px' }}>Neue Produktbewertung hinzufügen</h2>
        <br />
        
              <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
        <h3 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>Produktbewertung</h3>
        <input type="text" name="titel" placeholder="Produktbezeichnung" style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="text" name="name" placeholder="Dein Name" style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="number" name="rating" max={10} min={1} placeholder="Bewertung von 1 bis 10" style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <textarea name="beschreibung" placeholder="Beschreibung" style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
        <br />
        <button type="submit" className="btn1" style={{ padding: '10px 20px', backgroundColor: '#gray', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Neue Produktbewertung hinzufügen</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      </form>
    </main>
  

  )
}