import React from 'react'
import MainBranch from '../../../Sources/MainBranch'
import {MarbleData} from '../../../Data/ProjectsData'

const Marble = () => {
  const branchPage = MarbleData.mainData.map(catPage => {
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

export default Marble