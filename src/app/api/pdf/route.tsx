import { allPrivateFields } from '@content';
import { renderToBuffer } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import PDF from 'src/components/PDF/PDF';

const privateKey = process.env.PRIVATE_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  let privateInformation;
  if (secret !== null) {
    if (secret !== privateKey) {
      return new NextResponse('Not authorized', { status: 401 });
    }
    privateInformation = allPrivateFields;
  }

  const pdfStream = await renderToBuffer(
    <PDF privateInformation={privateInformation} />,
  );

  return new NextResponse(pdfStream, {
    headers: {
      'Content-Type': 'application/pdf',
    },
  });
}
