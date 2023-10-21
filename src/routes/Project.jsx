import React from "react"
import ProjectDetails from '../routes/ProjectDet'
import ProjectData from '../Data/ProjectData'
export default function Project() {

    const Project = ProjectData.map(ProjectItem => {
        return<ProjectDetails
        id={ProjectItem.id}
        {...ProjectItem}
        />
    })

return (
    <>
        {Project}
    </>
)
}