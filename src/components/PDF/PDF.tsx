import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import React from 'react';
import { getFullName } from '../../helpers/utils';
import { ResumePageProps } from '../../pages';
import colors from '../../strum-design-system/themes/timbre/colors';
import spacers from '../../strum-design-system/themes/timbre/spacers';

const domain = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';
const fontPath = `${domain}/fonts/SourceSansPro`;

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

const styles = StyleSheet.create({
  page: {
    alignItems: 'stretch',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
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
  sidebarContent: { padding: `${spacers[6]} ${spacers[4]}` },
  header: {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: `${spacers[6]} ${spacers[4]}`,
    textAlign: 'center',
  },
  headerTitle: { fontSize: 20, fontWeight: 700 },
  headerSubtitle: { fontSize: 16, fontWeight: 700 },
  main: {
    alignSelf: 'stretch',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    padding: `${spacers[6]} ${spacers[4]}`,
  },
  section: { marginBottom: spacers[6] },
  sectionHeading: { fontSize: 16, fontWeight: 700 },
});

const PDF: React.FC<ResumePageProps> = (props) => {
  const { personalInformation } = props;
  const fullName = getFullName(personalInformation);

  return (
    <Document>
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
              <Text style={styles.sectionHeading}>About Me</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Contact Information</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Skills &amp; Expertise</Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Professional Experience</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Education</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Hobbies &amp; Interests</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
