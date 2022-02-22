import {
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import indefinite from 'indefinite';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import { formatDate, getFullName } from '../../helpers/utils';
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
    educationalExperiences,
    links,
    personalInformation,
    privateInformation,
    professionalExperiences,
    skills,
  } = props;
  const fullName = getFullName(personalInformation);
  const jobTitle = indefinite(personalInformation.job_title);
  const CMS = getCMSIntegration();

  return (
    <>
      <PageHead
        description={`Professional résumé for ${fullName}, ${jobTitle} living in ${personalInformation.location}.`}
        personalInformation={personalInformation}
        title={`Résumé | ${fullName} | ${personalInformation.location}`}
      />

      <Header subtitle={personalInformation.job_title} title={fullName} />

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

        {professionalExperiences.map((experience) => (
          <ProfessionalItem
            end_date={
              experience.end_date
                ? formatDate(CMS.parseDate(experience.end_date))
                : null
            }
            id={experience.id}
            is_current={experience.is_current}
            key={experience.id}
            organization_name={experience.organization_name}
            position_description={
              <CMS.RichTextComponent
                richText={experience.position_description}
              />
            }
            position_title={experience.position_title}
            start_date={formatDate(CMS.parseDate(experience.start_date))}
          />
        ))}
      </Section>

      <Section color="standard">
        <Box marginBottom={6}>
          <SectionHeader icon={faGraduationCap} text="Education" />
        </Box>

        {educationalExperiences.map((experience) => (
          <EducationItem
            achievement_description={
              <CMS.RichTextComponent
                richText={experience.achievement_description}
              />
            }
            achievement_title={experience.achievement_title}
            id={experience.id}
            key={experience.id}
            organization_name={experience.organization_name}
            year={experience.year}
          />
        ))}
      </Section>

      <Section color="alternate">
        <HobbiesAndInterests personalInformation={personalInformation} />
      </Section>

      <Footer personalInformation={personalInformation} links={links} />
    </>
  );
};

export default ResumeLayout;
