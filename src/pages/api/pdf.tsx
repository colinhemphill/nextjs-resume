import ReactPDF from '@react-pdf/renderer';
import { NextApiHandler } from 'next';
import { getCMSIntegration } from '../../cms-integration/getCMSIntegration';
import { getPrivateInformation } from '../../cms-integration/markdown/private';
import PDF from '../../components/PDF/PDF';

const privateKey = process.env.PRIVATE_KEY;

const handler: NextApiHandler = async (req, res) => {
  const props = await getCMSIntegration('markdown');

  const secret = req.query.secret;
  let privateInformation;
  if (typeof secret !== 'undefined') {
    if (secret !== privateKey) {
      res.writeHead(401);
      res.end('Not authorized');
      return null;
    }
    privateInformation = await getPrivateInformation();
  }

  const pdfStream = await ReactPDF.renderToStream(
    <PDF privateInformation={privateInformation} {...props} />,
  );
  res.setHeader('Content-Type', 'application/pdf');
  pdfStream.pipe(res);
  pdfStream.on('end', () => {});
};

export default handler;
