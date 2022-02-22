import {
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import indefinite from 'indefinite';
import { InferGetServerSidePropsType, NextPage } from 'next';
import React from 'react';
import getCMSIntegration from '../../../cms-integration/getCMSIntegration';
import { getPrivateInformation } from '../../../cms-integration/markdown/private';
import AboutMe from '../../../components/Articles/AboutMe';
import ContactInformation from '../../../components/Articles/ContactInformation';
import HobbiesAndInterests from '../../../components/Articles/HobbiesAndInterests';
import EducationItem from '../../../components/EducationItem/EducationItem';
import Header from '../../../components/Header/Header';
import PageHead from '../../../components/PageHead';
import ProfessionalItem from '../../../components/ProfessionalItem/ProfessionalItem';
import Section from '../../../components/Section/Section';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import Skills from '../../../components/Skills/Skills';
import { getFullName } from '../../../helpers/utils';
import {
  pdfLayoutStyle,
  pdfMainStyle,
  pdfSidebarStyle,
} from '../../../styles/pdf.css';

export const getServerSideProps = async (ctx) => {
  const {
    params: { secret },
    res,
  } = ctx;
  const privateKey = process.env.PRIVATE_KEY;
  if (secret !== privateKey) {
    res.writeHead(401);
    res.end('Not authorized');
    return { props: {} };
  }

  const { education, hobbies, personalInformation, professional, skills } =
    await getCMSIntegration('markdown');
  const privateInformation = await getPrivateInformation();

  return {
    props: {
      education,
      hobbies,
      personalInformation,
      privateInformation,
      professional,
      skills,
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const ResumePage: NextPage<Props> = (props) => {
  const {
    education,
    hobbies,
    personalInformation,
    privateInformation,
    professional,
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

      <div className={pdfLayoutStyle}>
        <div className={pdfSidebarStyle}>
          <Header
            pdf
            subtitle={personalInformation.attributes.title}
            title={fullName}
          />
          <Section color="alternate">
            <AboutMe personalInformation={personalInformation} />
            <ContactInformation
              personalInformation={personalInformation}
              privateInformation={privateInformation}
            />
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

            <HobbiesAndInterests hobbies={hobbies} />
          </Section>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
