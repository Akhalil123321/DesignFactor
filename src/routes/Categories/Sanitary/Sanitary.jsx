import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {SanitaryData} from '../../../Data/ProjectsData'

const Sanitary = () => {
  const branchPage = SanitaryData.mainData.map(catPage => {
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

export default Sanitary