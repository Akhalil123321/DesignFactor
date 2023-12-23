import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {MaintenanceData} from '../../../Data/ProjectsData'

const Maintenance = () => {
  const branchPage = MaintenanceData.mainData.map(catPage => {
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

export default Maintenance