import {
  faBriefcase,
  faCheck,
  faDiceD20,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { Box, Stack } from '@strum/react';
import indefinite from 'indefinite';
import React from 'react';
import { getFullName } from '../../helpers/utils';
import { ResumePageProps } from '../../pages';
import AboutMe from '../Articles/AboutMe';
import ContactInformation from '../Articles/ContactInformation';
import HobbiesAndInterests from '../Articles/HobbiesAndInterests';
import EducationItem from '../EducationItem/EducationItem';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageHead from '../PageHead';
import ProfessionalItem from '../ProfessionalItem/ProfessionalItem';
import Section from '../Section/Section';
import SectionHeading from '../SectionHeading/SectionHeading';
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

      <Section>
        <Stack
          direction={{ xs: 'vertical', lg: 'horizontal' }}
          gap={{ xs: '4', lg: '8' }}
          wrap={false}
        >
          <Box flexBasis="0" flexGrow={1}>
            <AboutMe personalInformation={personalInformation} />
          </Box>
          <Box flexBasis="0" flexGrow={1}>
            <ContactInformation
              personalInformation={personalInformation}
              privateInformation={privateInformation}
            />
          </Box>
        </Stack>

        <Box marginTop="6">
          <SectionHeading icon={faCheck} text="Skills &amp; Expertise" />
          <Skills skills={skills} />
        </Box>
      </Section>

      <Section color="neutral2">
        <SectionHeading
          icon={faBriefcase}
          level="2"
          text="Professional Experience"
        />

        {professional.map((experience) => (
          <ProfessionalItem key={experience.slug} {...experience} />
        ))}
      </Section>

      <Section>
        <SectionHeading icon={faGraduationCap} level="2" text="Education" />

        {education.map((experience) => (
          <EducationItem key={experience.slug} {...experience} />
        ))}
      </Section>

      <Section>
        <SectionHeading
          icon={faDiceD20}
          level="2"
          text="Hobbies &amp; Interests"
        />

        <HobbiesAndInterests hobbies={hobbies} />
      </Section>

      <Footer links={links} personalInformation={personalInformation} />
    </>
  );
};

export default ResumeLayout;
