import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {FitOutData} from '../../../Data/ProjectsData'

const Fitout = () => {
  const branchPage = FitOutData.mainData.map(catPage => {
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

export default Fitout