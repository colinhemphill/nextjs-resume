import { ImageResponse } from 'next/og';
import { getAccentColor } from 'src/helpers/colors';
import { initials } from 'src/helpers/utilities';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function icon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full items-center justify-center rounded-full font-bold"
        style={{
          color: getAccentColor(1),
          backgroundColor: getAccentColor(11),
          fontSize: 20,
        }}
      >
        {initials}
      </div>
    ),
    {
      ...size,
    },
  );
}
