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
import { getFullName } from '../../helpers/utils';
import { ResumePageProps } from '../../pages';
import colors from '../../strum-design-system/themes/timbre/colors';
import spacers from '../../strum-design-system/themes/timbre/spacers';

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
    alignItems: 'stretch',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    fontSize: fontSizes.xxs,
    justifyContent: 'flex-start',
    fontFamily: 'Source Sans Pro',
  },
  sidebar: {
    alignSelf: 'stretch',
    backgroundColor: colors.light,
    display: 'flex',
    color: colors.dark,
    flexBasis: `${sidebarWidth}in`,
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
  },
  sidebarContent: { padding: spacers[4] },
  header: {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: `${spacers[6]} ${spacers[4]}`,
    textAlign: 'center',
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
    padding: spacers[4],
  },
  section: { marginBottom: spacers[4] },
  sectionHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.m,
    fontWeight: 700,
    marginBottom: spacers[1],
  },
  sectionHeadingIcon: {
    marginRight: spacers[1],
    height: fontSizes.s,
    width: 'auto',
  },
  sectionParagraph: { margin: 0, fontWeight: 400 },
  bold: { fontWeight: 700 },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  flexRow: { display: 'flex', flexDirection: 'row' },
});

const htmlProps: Omit<HtmlProps, 'children'> = {
  style: { fontSize: fontSizes.xxs },
  stylesheet: { p: styles.sectionParagraph },
};

const PDF: React.FC<ResumePageProps> = (props) => {
  const { personalInformation } = props;
  const fullName = getFullName(personalInformation);
  const year = new Date().getFullYear();

  return (
    <Document author={fullName} title={`Résume for ${fullName}, ${year}`}>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.sidebar}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{fullName}</Text>
            <Text style={styles.headerSubtitle}>
              {personalInformation.attributes.title}
            </Text>
          </View>
          <View style={styles.sidebarContent}>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <Image
                  src={`${iconPath}/circle-user-solid.png`}
                  style={styles.sectionHeadingIcon}
                />
                <Text>About Me</Text>
              </View>
              <Html {...htmlProps}>{personalInformation.html}</Html>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <Image
                  src={`${iconPath}/address-card-solid.png`}
                  style={styles.sectionHeadingIcon}
                />
                <Text>Contact Information</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.bold}>Location: </Text>
                <Text>{personalInformation.attributes.location}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <Image
                  src={`${iconPath}/circle-check-solid.png`}
                  style={styles.sectionHeadingIcon}
                />
                <Text>Skills &amp; Expertise</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Image
                src={`${iconPath}/briefcase-solid.png`}
                style={styles.sectionHeadingIcon}
              />
              <Text>Professional Experience</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Image
                src={`${iconPath}/graduation-cap-solid.png`}
                style={styles.sectionHeadingIcon}
              />
              <Text>Education</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Image
                src={`${iconPath}/dice-d20-solid.png`}
                style={styles.sectionHeadingIcon}
              />
              <Text>Hobbies &amp; Interests</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
