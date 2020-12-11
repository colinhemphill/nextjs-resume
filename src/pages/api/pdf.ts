import chrome from 'chrome-aws-lambda';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

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
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const browser = await puppeteer.launch(
    !isDev
      ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: true,
        }
      : {},
  );
  const page = await browser.newPage();
  await page.goto(`${protocol}://${url}/pdf`);
  const pdf = await page.pdf({
    displayHeaderFooter: false,
    format: 'Letter',
    landscape: false,
    preferCSSPageSize: false,
    printBackground: true,
    scale: 1,
  });
  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  res.end(pdf);
};

export default handler;
