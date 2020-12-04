import chrome from 'chrome-aws-lambda';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

const isDev = process.env.NODE_ENV === 'development';
const url = isDev ? 'http://localhost:3000' : process.env.PDF_URL;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
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
  await page.goto(url);
  const pdf = await page.pdf({
    format: 'Letter',
    printBackground: true,
    scale: 1,
  });
  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  res.end(pdf);
};

export default handler;
