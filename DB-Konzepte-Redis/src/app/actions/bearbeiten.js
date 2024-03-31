'use server'

import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function bearbeitenBewertung(id, formData) {
  const {titel, rating, name, beschreibung} = Object.fromEntries(formData)

  // check if the bewertung exists
  const exists = await client.zScore('bewertungs', titel)

  if (!exists) {
    return {error: 'Bewertung nicht gefunden.'}
  }

  // update hash 
  await client.hSet(`bewertungs:${id}`, {
    titel,
    rating,
    name,
    beschreibung
  })

  redirect('/')
}