/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import Item from "@lekoarts/gatsby-theme-emma/src/components/project-info-item";

type ProjectInfoProps = {
  project: {
    client: string;
    date: string;
    service: string;
  };
};

const ProjectInfo = ({ project }: ProjectInfoProps) => <div></div>;
{
  /* <Flex sx={{ mt: 4, flexWrap: `wrap`, maxWidth: "820px" }}> */
}
{
  /* <Item name="Sintoma" content={project.client} /> */
}
{
  /* <Item name="Fecha" content={project.date} /> */
}
{
  /* <Item name="Camino" content={project.service} /> */
}
{
  /* </Flex> */
}

export default ProjectInfo;
