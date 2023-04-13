import { allPrivateFields } from '@content';
import ReactPDF from '@react-pdf/renderer';
import { NextApiHandler } from 'next';
import PDF from '../../components/PDF/PDF';

const privateKey = process.env.PRIVATE_KEY;

const handler: NextApiHandler = async (req, res) => {
  const secret = req.query.secret;

  let privateInformation;
  if (typeof secret !== 'undefined') {
    if (secret !== privateKey) {
      res.writeHead(401);
      res.end('Not authorized');
      return null;
    }
    privateInformation = allPrivateFields;
  }

  const pdfStream = await ReactPDF.renderToStream(
    <PDF privateInformation={privateInformation} />,
  );
  res.setHeader('Content-Type', 'application/pdf');
  pdfStream.pipe(res);
  pdfStream.on('end', () => {});
};

export default handler;
