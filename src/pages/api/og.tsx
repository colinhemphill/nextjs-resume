import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import resumeConfig from '../../../edit-me/config/resumeConfig';
import accents from '../../tokens/accents';
import neutrals from '../../tokens/neutrals';

const accentColor = accents[resumeConfig.accentColor];
const neutralColor = neutrals[resumeConfig.neutralColor];

const albertSansBold = fetch(
  new URL('../../../public/fonts/AlbertSans-Bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());
const albertSansRegular = fetch(
  new URL('../../../public/fonts/AlbertSans-Regular.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

export const config = {
  runtime: 'experimental-edge',
};

const handler = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const theme = searchParams.get('theme') || 'light';
    const name = searchParams.get('name');
    const fontBold = await albertSansBold;
    const fontRegular = await albertSansRegular;
    const accent = accentColor[theme];
    const neutral = neutralColor[theme];

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: neutral[1],
          }}
          tw="flex w-full h-full items-center justify-center"
        >
          <div
            style={{
              backgroundColor: accent[1],
              color: accent[11],
              borderColor: accent[7],
            }}
            tw="flex flex-col items-center justify-center text-center w-9/12 h-8/12 border-2 rounded-xl"
          >
            <div
              style={{
                color: accent[12],
                fontFamily: 'Albert Sans Bold',
                fontWeight: 700,
              }}
              tw="text-8xl"
            >
              {name}
            </div>
            <div
              style={{
                color: accent[11],
                fontFamily: 'Albert Sans Regular',
              }}
              tw="text-6xl"
            >
              Professional Résumé
            </div>
            <div style={{ color: accent[12] }} tw="mt-12 text-4xl rounded-lg">
              Available online or as a PDF
            </div>
          </div>
        </div>
      ),
      {
        fonts: [
          {
            data: fontBold,
            name: 'Albert Sans Bold',
            style: 'normal',
            weight: 700,
          },
          {
            data: fontRegular,
            name: 'Albert Sans Regular',
            style: 'normal',
            weight: 400,
          },
        ],
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    return new Response('Failed to generate OG image', {
      status: 500,
    });
  }
};

export default handler;
