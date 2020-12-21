import {
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import indefinite from 'indefinite';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { getCMSIntegration } from '../../../cms';
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
import { formatDate, getFullName } from '../../../helpers';
import styles from '../../../styles/pdf.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps: GetServerSideProps = async (ctx) => {
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

  const CMS = getCMSIntegration();
  const personalInformation = await CMS.getPersonalInformation();
  const professionalExperiences = await CMS.getProfessionalExperiences();
  const privateInformation = await CMS.getPrivateInformation();
  const educationalExperiences = await CMS.getEducationalExperiences();
  const skills = await CMS.getSkills();

  return {
    props: {
      educationalExperiences,
      personalInformation,
      privateInformation,
      professionalExperiences,
      skills,
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const ResumePage = (props: Props): JSX.Element => {
  const {
    educationalExperiences,
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

      <div className={styles.pdfLayout}>
        <div className={styles.pdfSidebar}>
          <Header
            pdf
            subtitle={personalInformation.job_title}
            title={fullName}
          />
          <Section color="light" pdf>
            <AboutMe personalInformation={personalInformation} />
            <div className="mt-xs" />
            <ContactInformation
              personalInformation={personalInformation}
              privateInformation={privateInformation}
            />
            <Skills skills={skills} />
          </Section>
        </div>

        <div className={styles.pdfMain}>
          <Section color="white" pdf>
            <SectionHeader icon={faBriefcase} text="Professional Experience" />
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
                pdf
                position_description={
                  <CMS.RichTextComponent
                    richText={experience.position_description}
                  />
                }
                position_title={experience.position_title}
                start_date={formatDate(CMS.parseDate(experience.start_date))}
              />
            ))}

            <div className="mt-xs" />

            <SectionHeader icon={faGraduationCap} text="Education" />
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
                pdf
                year={experience.year}
              />
            ))}

            <div className="mt-xs" />

            <HobbiesAndInterests personalInformation={personalInformation} />
          </Section>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
