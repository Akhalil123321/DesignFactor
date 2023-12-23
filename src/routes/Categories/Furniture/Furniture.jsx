import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {FurnitureData} from '../../../Data/ProjectsData'

const Furniture = () => {
  const branchPage = FurnitureData.mainData.map(catPage => {
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

export default Furniture