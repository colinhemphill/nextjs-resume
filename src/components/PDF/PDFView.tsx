import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { ResumePageProps } from '../../pages';
import PDF from './PDF';
import { pdfViewStyle } from './PDF.css';

const PDFView: React.FC<ResumePageProps> = (props) => {
  return (
    <PDFViewer className={pdfViewStyle}>
      <PDF {...props} />
    </PDFViewer>
  );
};

export default PDFView;
