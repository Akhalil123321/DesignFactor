import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {AppliancesData} from '../../../Data/ProjectsData'

const Appliances = () => {
  const branchPage = AppliancesData.mainData.map(catPage => {
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

export default Appliances