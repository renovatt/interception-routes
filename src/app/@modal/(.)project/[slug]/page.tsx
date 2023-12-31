import { ProjectResponse } from "@/@types";
import { getProjectsById } from "@/services"
import { ProjectDetails } from "@/app/components/ProjectDetails";

export default async function Project({ params }: { params: { slug: string } }) {
    const project = await getProjectsById(params.slug);
    const projectDate = project as ProjectResponse

    return (
            <ProjectDetails.Root {...projectDate} >
                <ProjectDetails.Content  {...projectDate} >
                    <ProjectDetails.Card  {...projectDate} />
                    <ProjectDetails.Icon />
                    <ProjectDetails.ThumbnailContainer >
                        <ProjectDetails.Thumbnail {...projectDate} />
                        <ProjectDetails.Description text={projectDate.description} />
                        <ProjectDetails.Techs {...projectDate} />
                    </ProjectDetails.ThumbnailContainer>
                </ProjectDetails.Content>
            </ProjectDetails.Root>
    )
}