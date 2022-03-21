import {
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import indefinite from 'indefinite';
import React from 'react';
import { getFullName } from '../../helpers/utils';
import { ResumePageProps } from '../../pages';
import Box from '../../strum-design-system/components/Box/Box';
import Column from '../../strum-design-system/components/Layout/Column';
import Row from '../../strum-design-system/components/Layout/Row';
import AboutMe from '../Articles/AboutMe';
import ContactInformation from '../Articles/ContactInformation';
import HobbiesAndInterests from '../Articles/HobbiesAndInterests';
import EducationItem from '../EducationItem/EducationItem';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageHead from '../PageHead';
import ProfessionalItem from '../ProfessionalItem/ProfessionalItem';
import Section from '../Section/Section';
import SectionHeader from '../SectionHeader/SectionHeader';
import Skills from '../Skills/Skills';

const ResumeLayout: React.FC<ResumePageProps> = (props) => {
  const {
    education,
    hobbies,
    links,
    personalInformation,
    privateInformation,
    professional,
    secret,
    skills,
  } = props;
  const fullName = getFullName(personalInformation);
  const jobTitle = indefinite(personalInformation.attributes.title);

  return (
    <>
      <PageHead
        description={`Professional résumé for ${fullName}, ${jobTitle} living in ${personalInformation.attributes.location}.`}
        personalInformation={personalInformation}
        title={`Résumé | ${fullName} | ${personalInformation.attributes.location}`}
      />

      <Header secret={secret} {...props} />

      <Section color="standard">
        <Row>
          <Column width={{ xs: 12, lg: 6 }}>
            <AboutMe personalInformation={personalInformation} />
          </Column>
          <Column width={{ xs: 12, lg: 6 }}>
            <ContactInformation
              personalInformation={personalInformation}
              privateInformation={privateInformation}
            />
          </Column>
        </Row>

        <Skills skills={skills} />
      </Section>

      <Section color="alternate">
        <Box marginBottom={6}>
          <SectionHeader icon={faBriefcase} text="Professional Experience" />
        </Box>

        {professional.map((experience) => (
          <ProfessionalItem key={experience.slug} {...experience} />
        ))}
      </Section>

      <Section color="standard">
        <Box marginBottom={6}>
          <SectionHeader icon={faGraduationCap} text="Education" />
        </Box>

        {education.map((experience) => (
          <EducationItem key={experience.slug} {...experience} />
        ))}
      </Section>

      <Section color="alternate">
        <HobbiesAndInterests hobbies={hobbies} />
      </Section>

      <Footer links={links} personalInformation={personalInformation} />
    </>
  );
};

export default ResumeLayout;
