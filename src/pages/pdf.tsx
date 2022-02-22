import {
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import indefinite from 'indefinite';
import { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import getCMSIntegration from '../cms-integration/getCMSIntegration';
import AboutMe from '../components/Articles/AboutMe';
import ContactInformation from '../components/Articles/ContactInformation';
import HobbiesAndInterests from '../components/Articles/HobbiesAndInterests';
import EducationItem from '../components/EducationItem/EducationItem';
import Header from '../components/Header/Header';
import PageHead from '../components/PageHead';
import ProfessionalItem from '../components/ProfessionalItem/ProfessionalItem';
import Section from '../components/Section/Section';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import Skills from '../components/Skills/Skills';
import { getFullName } from '../helpers/utils';
import {
  pdfLayoutStyle,
  pdfMainStyle,
  pdfSidebarStyle,
} from '../styles/pdf.css';

export const getStaticProps = async () => {
  const { education, personalInformation, professional, skills } =
    await getCMSIntegration('markdown');

  return {
    props: {
      education,
      personalInformation,
      professional,
      skills,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ResumePage: NextPage<Props> = (props) => {
  const { education, personalInformation, professional, skills } = props;
  const fullName = getFullName(personalInformation);
  const jobTitle = indefinite(personalInformation.attributes.title);

  return (
    <>
      <PageHead
        description={`Professional résumé for ${fullName}, ${jobTitle} living in ${personalInformation.attributes.location}.`}
        personalInformation={personalInformation}
        title={`Résumé | ${fullName} | ${personalInformation.attributes.location}`}
      />

      <div className={pdfLayoutStyle}>
        <div className={pdfSidebarStyle}>
          <Header
            pdf
            subtitle={personalInformation.attributes.title}
            title={fullName}
          />
          <Section color="alternate">
            <AboutMe personalInformation={personalInformation} />
            <ContactInformation personalInformation={personalInformation} />
            <Skills skills={skills} />
          </Section>
        </div>

        <div className={pdfMainStyle}>
          <Section color="standard">
            <SectionHeader icon={faBriefcase} text="Professional Experience" />
            {professional.map((experience) => (
              <ProfessionalItem key={experience.slug} pdf {...experience} />
            ))}

            <SectionHeader icon={faGraduationCap} text="Education" />
            {education.map((experience) => (
              <EducationItem key={experience.slug} pdf {...experience} />
            ))}

            <HobbiesAndInterests personalInformation={personalInformation} />
          </Section>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
