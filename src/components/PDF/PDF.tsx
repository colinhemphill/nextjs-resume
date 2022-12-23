/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import React from 'react';
import Html from 'react-pdf-html';
import { HtmlProps } from 'react-pdf-html/dist/Html';
import createTw from 'react-pdf-tailwind';
import resumeConfig from '../../../edit-me/config/resumeConfig';
import tailwindConfig from '../../../tailwind.config';
import { CMSData } from '../../cms-integration/getCMSIntegration';
import { getFullName } from '../../helpers/utils';
import accents from '../../tokens/accents';
import neutrals from '../../tokens/neutrals';

const accentColor = accents[resumeConfig.accentColor].light;
const neutralColor = neutrals[resumeConfig.neutralColor].light;

const tw = createTw({
  theme: tailwindConfig.theme,
});

const domain = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';
const fontPath = `${domain}/fonts/SourceSansPro`;
const iconPath = `${domain}/pdf/fa-icons`;

Font.register({
  family: 'Source Sans Pro',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 400,
      src: `${fontPath}/SourceSansPro-Regular.ttf`,
    },
    {
      fontStyle: 'italic',
      fontWeight: 400,
      src: `${fontPath}/SourceSansPro-Italic.ttf`,
    },
    {
      fontStyle: 'normal',
      fontWeight: 700,
      src: `${fontPath}/SourceSansPro-Bold.ttf`,
    },
    {
      fontStyle: 'italic',
      fontWeight: 700,
      src: `${fontPath}/SourceSansPro-BoldItalic.ttf`,
    },
  ],
});

const sidebarWidth = 2.75;
const fontSizes = {
  xl: 20,
  l: 18,
  m: 16,
  s: 14,
  xs: 12,
  xxs: 10,
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Source Sans Pro',
  },
  sidebar: {
    backgroundColor: neutralColor[2],
    color: neutralColor[12],
    flexBasis: `${sidebarWidth}in`,
  },
  header: {
    backgroundColor: accentColor[10],
    color: neutralColor[1],
  },
  headerTitle: { fontSize: fontSizes.xl, fontWeight: 700 },
  headerSubtitle: { fontSize: fontSizes.l, fontWeight: 700 },
  main: {
    alignSelf: 'stretch',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    // padding: tokens.space[4],
  },
  section: {},
  sectionHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.m,
    fontWeight: 700,
  },
  sectionHeadingNonHTML: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.m,
    fontWeight: 700,
    // marginBottom: tokens.space[1],
  },
  sectionHeadingIcon: {
    height: fontSizes.m,
    // marginRight: tokens.space[1],
    width: fontSizes.m,
  },
  sectionHeadingStars: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    // marginRight: tokens.space[1],
  },
  sectionHeadingStar: {
    height: fontSizes.xxs,
    width: 'auto',
  },
  sectionParagraph: { fontWeight: 400, margin: 0 },
  itemHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.s,
    fontWeight: 700,
    // marginBottom: tokens.space[1],
    // marginTop: tokens.space[3],
  },
  itemSubheadingRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    // marginBottom: tokens.space[1],
  },
  itemSubheading: {
    fontSize: fontSizes.xxs,
    fontStyle: 'italic',
  },
  itemSubheadingIcon: {
    height: fontSizes.xxs,
    // marginRight: tokens.space[1],
  },
  professionalTitle: {
    backgroundColor: neutralColor[12],
    color: neutralColor[1],
  },
  bold: { fontWeight: 700 },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  flexRow: { alignItems: 'center', display: 'flex', flexDirection: 'row' },
  flexRowAlignStart: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  a: {
    color: accentColor[10],
    textDecoration: 'underline',
  },
});

const htmlProps: Omit<HtmlProps, 'children'> = {
  style: { fontSize: fontSizes.xxs },
  stylesheet: {
    a: styles.a,
    p: styles.sectionParagraph,
  },
};

const PDF: React.FC<CMSData> = (props) => {
  const {
    achievements,
    hobbies,
    personalInformation,
    privateInformation,
    professional,
    skills,
  } = props;
  const fullName = getFullName(personalInformation);
  const year = new Date().getFullYear();

  return (
    // @ts-ignore
    <Document author={fullName} title={`Résume for ${fullName}, ${year}`}>
      {/* @ts-ignore */}
      <Page
        size="LETTER"
        style={{
          ...styles.page,
          ...tw('flex items-stretch flex-row justify-start flex-nowrap'),
        }}
      >
        <View
          style={{
            ...styles.sidebar,
            ...tw('self-stretch flex flex-col grow-0 shrink-0'),
          }}
        >
          <View style={{ ...styles.header, ...tw('px-4 py-8 text-center') }}>
            <Text style={styles.headerTitle}>{fullName}</Text>
            <Text style={styles.headerSubtitle}>
              {personalInformation.attributes.title}
            </Text>
          </View>
          <View style={tw('px-4 py-6')}>
            <View style={styles.section}>
              <View style={styles.sectionHeadingNonHTML}>
                <Image
                  src={`${iconPath}/circle-user.png`}
                  style={styles.sectionHeadingIcon}
                />
                <Text>About Me</Text>
              </View>
              <Html {...htmlProps}>{personalInformation.html}</Html>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeadingNonHTML}>
                <Image
                  src={`${iconPath}/circle-id-card.png`}
                  style={styles.sectionHeadingIcon}
                />
                <Text>Contact Information</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.bold}>Location:</Text>
                <Text>&nbsp;{personalInformation.attributes.location}</Text>
              </View>
              {privateInformation?.map((privateField) => (
                <View key={privateField.slug} style={styles.flexRowAlignStart}>
                  <Text style={styles.bold}>
                    {privateField.attributes.label}:&nbsp;
                  </Text>
                  <Html {...htmlProps}>{privateField.html}</Html>
                </View>
              ))}
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <Image
                  src={`${iconPath}/circle-checkmark.png`}
                  style={styles.sectionHeadingIcon}
                />
                <Text>Skills &amp; Expertise</Text>
              </View>
              {skills.map((skill, skillIndex) => (
                <View key={skill.slug}>
                  <View style={styles.itemHeading}>
                    <View style={styles.sectionHeadingStars}>
                      {Array.from(Array(skills.length - skillIndex)).map(
                        (star, starIndex) => (
                          <Image
                            key={starIndex}
                            src={`${iconPath}/star-yellow.png`}
                            style={styles.sectionHeadingStar}
                          />
                        ),
                      )}
                    </View>
                    <Text style={styles.bold}>{skill.attributes.title}</Text>
                  </View>
                  <Html {...htmlProps}>{skill.html}</Html>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Image
                src={`${iconPath}/circle-briefcase.png`}
                style={styles.sectionHeadingIcon}
              />
              <Text>Professional Experience</Text>
            </View>
            {professional.map((professionalExperience) => (
              <View key={professionalExperience.slug}>
                <View style={styles.itemHeading}>
                  <Text
                    style={{
                      ...styles.professionalTitle,
                      ...tw('rounded-md px-2 font-bold'),
                    }}
                  >
                    {professionalExperience.attributes.title}
                  </Text>
                  <Text>
                    &nbsp;at {professionalExperience.attributes.organization}
                  </Text>
                </View>
                <View style={styles.itemSubheadingRow}>
                  <Image
                    src={`${iconPath}/calendar.png`}
                    style={styles.itemSubheadingIcon}
                  />
                  <Text style={styles.itemSubheading}>
                    {professionalExperience.attributes.startDate}—
                    {professionalExperience.attributes.endDate
                      ? professionalExperience.attributes.endDate
                      : 'Current'}
                  </Text>
                </View>
                <Html {...htmlProps}>{professionalExperience.html}</Html>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Image
                src={`${iconPath}/circle-graduation-cap.png`}
                style={styles.sectionHeadingIcon}
              />
              <Text>Achievements</Text>
            </View>
            {achievements.map((achievement) => (
              <View key={achievement.slug}>
                <View style={styles.itemHeading}>
                  <Text style={styles.bold}>
                    {achievement.attributes.achievement}
                  </Text>
                </View>
                <View style={styles.itemSubheadingRow}>
                  <Image
                    src={`${iconPath}/university.png`}
                    style={styles.itemSubheadingIcon}
                  />
                  <Text style={styles.itemSubheading}>
                    {achievement.attributes.institution}
                  </Text>
                </View>
                <Html {...htmlProps}>{achievement.html}</Html>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Image
                src={`${iconPath}/circle-pen-paintbrush.png`}
                style={styles.sectionHeadingIcon}
              />
              <Text>Hobbies &amp; Interests</Text>
            </View>
            <Html
              {...htmlProps}
              stylesheet={{
                ...htmlProps.stylesheet,
                // p: { marginBottom: tokens.space[1] },
              }}
            >
              {hobbies.html}
            </Html>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
