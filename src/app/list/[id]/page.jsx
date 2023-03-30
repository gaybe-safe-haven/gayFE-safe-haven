import getShelterData from '../../../apiCalls'

export default async function ShelterPage({ params }) {
  const res = await getShelterData(`shelters/${params.id}`)
  
  return (
    <p>shelter number {params.id}</p>
  )
}