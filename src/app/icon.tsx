import { ImageResponse } from 'next/og';
import { contrastColor } from '../helpers/colorContrast';
import { getAccentColor } from '../helpers/colors';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function icon() {
  return new ImageResponse(
    (
      <div
        tw="rounded-full text-xl w-full h-full flex items-center justify-center"
        style={{
          backgroundColor: getAccentColor(9),
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill={contrastColor}
          width="50%"
          height="50%"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  );
}
