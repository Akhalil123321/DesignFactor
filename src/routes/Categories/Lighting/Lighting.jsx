import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {LightingData} from '../../../Data/ProjectsData'

const Lighting = () => {
  const branchPage = LightingData.mainData.map(catPage => {
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

export default Lighting