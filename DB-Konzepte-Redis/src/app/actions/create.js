'use server'

import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function createBewertung(formData) {
  const {titel, rating, name, beschreibung} = Object.fromEntries(formData)

  // id
  const id = Math.floor(Math.random() * 100000)

  // sorted set
  const unique = await client.zAdd('bewertungs', {
    value: titel,
    score: id
  }, { NX: true })

  if (!unique) {
    return {error: 'Schon vorhanden.'}
  }
  
  // new hash 
  await client.hSet(`bewertungs:${id}`, {
    titel,
    rating,
    name,
    beschreibung
  })

  redirect('/')
}