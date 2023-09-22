// Styles
import { Text } from "@/styles/Text";

// Components
import { Stack } from "@/components/Stack";
// Data
import { stackData } from "@/utils/stackData";

// Page Style
import { Section, H2, StackCards } from "./style";

export const About = (): JSX.Element => {
  return (
    <Section id="about">
      <H2 color="grey2">Sobre:</H2>
      <Text type="body1" color="grey2">
        Sou uma profissional de desenvolvimento web em ascensão. Ao longo da
        minha jornada, participei de diversos projetos desafiadores, mostrando
        maturidade profissional e proficiência. Minha experiência abrange
        tecnologias como HTML, CSS, JavaScript e frameworks como React e
        Angular, além de estar estudando para adquirir a minha fluência em
        inglês, sabendo só o básico no momento. Assim sendo, estou aberta e
        animada para novas oportunidades no mercado de trabalho, onde poderei
        aplicar meu conhecimento para contribuir com o sucesso da equipe.
      </Text>
      <StackCards>
        {stackData.map((stack, index) => (
          <Stack key={index} title={stack.title} icon={stack.img} />
        ))}
      </StackCards>
    </Section>
  );
};
