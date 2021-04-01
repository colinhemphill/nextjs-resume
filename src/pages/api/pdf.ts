import chrome from 'chrome-aws-lambda';
import { NextApiRequest, NextApiResponse } from 'next';

const privateKey = process.env.PRIVATE_KEY;
const isDev = process.env.NODE_ENV === 'development';
const url =
  process.env.VERCEL === '1'
    ? process.env.VERCEL_URL
    : isDev
    ? 'localhost:3000'
    : 'my-pdf-url';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { secret } = req.query;
  const protocol = req.headers['x-forwarded-proto'] || 'http';

  if (secret && secret !== privateKey) {
    res.writeHead(401);
    return res.end('Not authorized');
  }

  const path = secret ? `private/${secret}/pdf` : 'pdf';

  const browser = await chrome.puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto(`${protocol}://${url}/${path}`);
  const pdf = await page.pdf({
    displayHeaderFooter: false,
    format: 'letter',
    landscape: false,
    margin: {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    },
    preferCSSPageSize: false,
    printBackground: true,
    scale: 1,
  });

  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  res.end(pdf);
};

export default handler;
