'use server'

import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function deleteBewertung(formData) {
  const {titel} = Object.fromEntries(formData)

  // get id
  const id = await client.zScore('bewertungs', titel)

  if (!id) {
    return {error: 'Bewertung nicht gefunden.'}
  }

  // remove from sorted set
  await client.zRem('bewertungs', titel)
  
  // delete hash 
  await client.del(`bewertungs:${id}`)

  redirect('/')
}