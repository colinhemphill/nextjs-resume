import { allPrivateFields } from '@content';
import { renderToBuffer } from '@react-pdf/renderer';
import PDF from '@src/components/pdf/pdf';
import { NextResponse } from 'next/server';

const privateKey = process.env.PRIVATE_KEY;

export async function GET(request: Request): Promise<NextResponse> {
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

  return new NextResponse(pdfStream as BodyInit, {
    headers: {
      'Content-Type': 'application/pdf',
    },
  });
}
