import resumeConfig from 'edit-me/config/resumeConfig';
import { ImageResponse } from 'next/og';
import { getAccentColor, getNeutralColor } from 'src/helpers/colors';
import { fullName } from 'src/helpers/utils';

const theme = resumeConfig.imageTheme;

export const alt = 'Professional Résumé';
export const contentType = 'image/png';
export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};

export default async function og() {
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
              fontWeight: 700,
            }}
            tw="text-8xl"
          >
            {fullName}
          </div>
          <div
            style={{
              color: getAccentColor(11, theme),
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
  );
}
