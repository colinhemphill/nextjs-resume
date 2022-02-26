import ReactPDF from '@react-pdf/renderer';
import { NextApiHandler } from 'next';
import getCMSIntegration from '../../cms-integration/getCMSIntegration';
import PDF from '../../components/PDF/PDF';

const handler: NextApiHandler = async (req, res) => {
  const props = await getCMSIntegration('markdown');
  const pdfStream = await ReactPDF.renderToStream(<PDF {...props} />);
  res.setHeader('Content-Type', 'application/pdf');
  pdfStream.pipe(res);
  pdfStream.on('end', () => {});
};

export default handler;
