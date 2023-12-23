import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {CeramicsData} from '../../../Data/ProjectsData'

const Ceramics = () => {
  const branchPage = CeramicsData.mainData.map(catPage => {
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

export default Ceramics