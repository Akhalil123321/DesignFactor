import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {gymData} from '../../../Data/ProjectsData'

const Gym = () => {
  const branchPage = gymData.mainData.map(catPage => {
    return <MainBranch
    key={catPage.id}
    {...catPage}
    />
})
  return (
  <>
    {branchPage}
  </>
  )
}

export default Gym