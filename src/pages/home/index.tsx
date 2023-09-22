// Styles
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

// Components
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderButtonsArea,
  H2,
  ProjectsArea,
  ProjectAreaWrapperColumns,
} from "./style";
import { About } from "@/components/About";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;

  return (
    <main id="home">
      <Header>
        <HeaderButtonsArea>
          <Button
            color="grey2"
            as="a"
            css={{ "&:hover": { color: "$grey1" } }}
            type="circle"
            target="_blank"
            href={gihubUrl}
          >
            <FaGithub />
          </Button>
        </HeaderButtonsArea>
      </Header>
      <About />
      <ProjectsArea>
        <ProjectAreaWrapperColumns id="projects">
          <H2>Projetos:</H2>
          <Project />
        </ProjectAreaWrapperColumns>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
