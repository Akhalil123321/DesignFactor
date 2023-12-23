import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {CurtainsData} from '../../../Data/ProjectsData'

const Curtains = () => {
  const branchPage = CurtainsData.mainData.map(catPage => {
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

export default Curtains