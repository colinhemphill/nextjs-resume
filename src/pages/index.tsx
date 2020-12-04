import {
  faBriefcase,
  faDiceD20,
  faGraduationCap,
  faIdCard,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import EducationItem from '../components/EducationItem/EducationItem';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PageHead from '../components/PageHead';
import ProfessionalItem from '../components/ProfessionalItem/ProfessionalItem';
import Section from '../components/Section/Section';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import Skills from '../components/Skills/Skills';
import {
  getEducationalExperiences,
  getLinks,
  getPersonalInformation,
  getProfessionalExperiences,
  getSkills,
  parseDate,
  RichTextComponent,
} from '../lib/cms';
import { formatDate, getFullName } from '../lib/helpers';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async () => {
  const personalInformation = await getPersonalInformation();
  const professionalExperiences = await getProfessionalExperiences();
  const educationalExperiences = await getEducationalExperiences();
  const skills = await getSkills();
  const links = await getLinks();

  return {
    props: {
      educationalExperiences,
      links,
      personalInformation,
      professionalExperiences,
      skills,
    },
    revalidate: 60,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ResumePage = (props: Props): JSX.Element => {
  const {
    educationalExperiences,
    links,
    personalInformation,
    professionalExperiences,
    skills,
  } = props;
  const fullName = getFullName(personalInformation);

  return (
    <>
      <PageHead
        description={`Professional résumé for ${fullName}, a front end developer living in ${personalInformation.location}.`}
        title={`Résumé | ${fullName} | ${personalInformation.location}`}
      />

      <Header subtitle={personalInformation.job_title} title={fullName} />

      <Section color="white">
        <div className="row">
          <div className="col-lg col-print-6">
            <article>
              <SectionHeader icon={faUser} text="About Me" />
              <RichTextComponent
                richText={personalInformation.about_me_description}
              />
            </article>
          </div>
          <div className="col-lg col-print-6 mt-lg-0 mt-xs">
            <article>
              <SectionHeader icon={faIdCard} text="Contact Information" />
              <ul className="list-unstyled">
                <li>
                  <strong>Location:</strong> {personalInformation.location}
                </li>
                {/* <li>
                    <strong>Email:</strong>{' '}
                  </li>
                  <li>
                    <strong>Phone:</strong>{' '}
                  </li> */}
              </ul>
            </article>
          </div>
        </div>

        <Skills skills={skills} />
      </Section>

      <Section color="light">
        <SectionHeader icon={faBriefcase} text="Professional Experience" />
        {professionalExperiences.map((experience) => (
          <ProfessionalItem
            end_date={
              experience.end_date
                ? formatDate(parseDate(experience.end_date))
                : null
            }
            id={experience.id}
            is_current={experience.is_current}
            key={experience.id}
            organization_name={experience.organization_name}
            position_description={
              <RichTextComponent richText={experience.position_description} />
            }
            position_title={experience.position_title}
            start_date={formatDate(parseDate(experience.start_date))}
          />
        ))}
      </Section>

      <Section color="white">
        <SectionHeader icon={faGraduationCap} text="Education" />
        {educationalExperiences.map((experience) => (
          <EducationItem
            achievement_description={
              <RichTextComponent
                richText={experience.achievement_description}
              />
            }
            achievement_title={experience.achievement_title}
            id={experience.id}
            key={experience.id}
            order={experience.order}
            organization_name={experience.organization_name}
          />
        ))}
      </Section>

      <Section color="light">
        <SectionHeader icon={faDiceD20} text="Hobbies & Interests" />
        <article>
          <RichTextComponent
            richText={personalInformation.hobbies_and_interests}
          />
        </article>
      </Section>

      <Footer personalInformation={personalInformation} links={links} />
    </>
  );
};

export default ResumePage;
