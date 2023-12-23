import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {DoorsData} from '../../../Data/ProjectsData'

const Doors = () => {
  const branchPage = DoorsData.mainData.map(catPage => {
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

export default Doors