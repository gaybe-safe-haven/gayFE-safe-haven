import { getShelterData } from '../../../apiCalls'

export default async function ShelterPage({ params }) {
  const shelter = await getShelterData(`shelters/${params.id}`)
  console.log(shelter.data)
  return (
    <main>
      <h1>{shelter.attributes.name}</h1>
      <div>
        <p>{shelter.attributes.address}</p>
        <p>{`${shelter.attributes.city}, ${shelter.attributes.state} ${shelter.attributes.zip}`}</p>
      </div>
      <div>
        {shelter.attributes.websiteUrl && <a href={`${shelter.attributes.websiteUrl}`}>website</a>}
        <p>{shelter.attributes.phoneNumber}</p>
      </div>
    </main>
    
  )
}