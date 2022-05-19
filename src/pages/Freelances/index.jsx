import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
//import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/hooks'
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

//const freelanceProfiles = [
//{
// name: 'Jane Doe',
//jobTitle: 'Devops',
//},
//{
//name: 'John Doe',
// jobTitle: 'Developpeur frontend',
// },
// {
// name: 'Jeanne Biche',
// jobTitle: 'Développeuse Fullstack',
//},
//]

function Freelances() {
  //useEffect(() => {
  //fetch(`http://localhost:8000/freelances`)
  //.then((response) =>
  //response.json().then(({ surveyData }) => alert(surveyData))
  //)
  //.catch((error) => console.log(error))
  //}, [])
  //const [freelanceData, setFreelanceData] = useState([])
  //const [isDataLoading, setDataLoading] = useState(false)

  //useEffect(() => {
  //setDataLoading(true)
  //fetch(`http://localhost:8000/freelances`)
  //.then((response) => {
  //if (response.ok) {
  //return response.json()
  // }
  // })
  //.then((freelanceDatav) => {
  // setFreelanceData(freelanceDatav['freelancersList'])
  //  setDataLoading(false)
  //})
  //.catch((error) => console.log(error))
  //}, [])
  const { isLoading, data, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {error ? (
            <span>une erreur lors du téléchargement</span>
          ) : (
            data['freelancersList'].map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
              />
            ))
          )}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
