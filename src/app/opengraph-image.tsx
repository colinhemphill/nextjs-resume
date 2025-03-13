import { resumeConfig } from '@config/resume-config';
import { personal } from '@content';
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getAccentColor, getNeutralColor } from 'src/helpers/colors';
import { fullName } from 'src/helpers/utilities';

const theme = resumeConfig.imageTheme;

export const alt = 'Professional Résumé';
export const contentType = 'image/png';
export const runtime = 'nodejs';
export const size = {
  width: 1200,
  height: 630,
};

export default async function og(): Promise<ImageResponse> {
  const albertBold = await readFile(
    path.join(process.cwd(), 'src/fonts/AlbertSans-Bold.ttf'),
  );
  const albertNormal = await readFile(
    path.join(process.cwd(), 'src/fonts/AlbertSans-Regular.ttf'),
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: 'AlbertSans',
          background: `linear-gradient(to right bottom, ${getNeutralColor(1, theme)} 0%, ${getAccentColor(4, theme)} 50%, ${getAccentColor(6, theme)} 100%)`,
        }}
        tw="flex h-full w-full flex-col justify-between p-20"
      >
        <div tw="flex flex-col">
          <div
            style={{
              color: getAccentColor(12, theme),
              fontWeight: 700,
            }}
            tw="text-8xl"
          >
            {fullName}
          </div>
          <div
            style={{
              color: getAccentColor(11, theme),
              fontWeight: 700,
            }}
            tw="mt-4 text-6xl"
          >
            {personal.title}
          </div>
        </div>
        <div
          style={{ color: getAccentColor(12, theme) }}
          tw="rounded-lg text-4xl"
        >
          Professional résumé available online or as a PDF
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'AlbertSans',
          data: albertBold,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'AlbertSans',
          data: albertNormal,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
