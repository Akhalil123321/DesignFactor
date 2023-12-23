import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {AccessoriesData} from '../../../Data/ProjectsData'

const Accessories = () => {
  const branchPage = AccessoriesData.mainData.map(catPage => {
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

export default Accessories