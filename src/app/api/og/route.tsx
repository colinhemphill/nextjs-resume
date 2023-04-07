import { ImageResponse, NextRequest } from 'next/server';
import { Theme } from '../../../../edit-me/config/Config';
import resumeConfig from '../../../../edit-me/config/resumeConfig';
import { getAccentColor, getNeutralColor } from '../../../helpers/colors';

const albertSansBold = fetch(
  new URL('public/fonts/AlbertSans-Bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());
const albertSansRegular = fetch(
  new URL('public/fonts/AlbertSans-Regular.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const theme =
      (searchParams.get('theme') as Theme) || resumeConfig.imageTheme;
    const name = searchParams.get('name');
    const fontBold = await albertSansBold;
    const fontRegular = await albertSansRegular;

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: getNeutralColor(1, theme),
          }}
          tw="flex w-full h-full items-center justify-center"
        >
          <div
            style={{
              backgroundColor: getAccentColor(1, theme),
              color: getAccentColor(11, theme),
              borderColor: getAccentColor(7, theme),
            }}
            tw="flex flex-col items-center justify-center text-center w-9/12 h-8/12 border-2 rounded-xl"
          >
            <div
              style={{
                color: getAccentColor(12, theme),
                fontFamily: 'Albert Sans Bold',
                fontWeight: 700,
              }}
              tw="text-8xl"
            >
              {name}
            </div>
            <div
              style={{
                color: getAccentColor(11, theme),
                fontFamily: 'Albert Sans Regular',
              }}
              tw="text-6xl"
            >
              Professional Résumé
            </div>
            <div
              style={{ color: getAccentColor(12, theme) }}
              tw="mt-12 text-4xl rounded-lg"
            >
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
    console.log(e);
    return new Response('Failed to generate OG image', {
      status: 500,
    });
  }
}
