/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable unicorn/no-array-reduce */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Image, Text, View } from '@react-pdf/renderer';
import { HtmlElement } from 'node_modules/react-pdf-html/dist/types/parse';
import { HtmlRenderer } from 'node_modules/react-pdf-html/dist/types/render';
import { HtmlStyle } from 'react-pdf-html';

// solves text overflow of list elements when rendered by react-pdf-html
// thanks to [justin-hackin](https://github.com/justin-hackin) for the custom renderer

const generateCustomLi =
  (
    bulletOverrides: Record<string, string | number>,
    contentOverrides: Record<string, string | number>,
  ): HtmlRenderer =>
  ({ element, stylesheets, style, children }) => {
    const bulletStyles = stylesheets.map((stylesheet) => stylesheet.li_bullet);
    const contentStyles = stylesheets.map((stylesheet) => ({
      ...stylesheet.li_content,
      flexBasis: 0,
    }));

    const list: HtmlElement = element.closest('ol, ul') as HtmlElement;
    const ordered = list.tag === 'ol' || element.parentNode.tag === 'ol';
    const listStyle =
      list.style.reduce<HtmlStyle>(
        (combined, listStyle) => Object.assign(combined, listStyle),
        {},
      ) || {};
    const itemStyle = element.style.reduce<HtmlStyle>(
      (combined, itemStyle) => Object.assign(combined, itemStyle),
      {},
    );
    const listStyleType =
      itemStyle.listStyleType ||
      itemStyle.listStyle ||
      listStyle.listStyleType ||
      listStyle.listStyle ||
      '';

    let bullet;
    if (listStyleType.includes('none')) {
      bullet = false;
    } else if (listStyleType.includes('url(')) {
      bullet = (
        <Image
          src={listStyleType.match(/\((.*?)\)/)[1].replaceAll(/(['"])/g, '')}
        />
      );
    } else if (ordered) {
      bullet = <Text>{element.indexOfType + 1}.</Text>;
    } else {
      bullet = <Text>•</Text>;
    }
    return (
      <View style={style}>
        {bullet && (
          <View style={{ ...bulletStyles, ...bulletOverrides }}>{bullet}</View>
        )}
        <View style={{ ...contentStyles, ...contentOverrides }}>
          {children}
        </View>
      </View>
    );
  };

export const htmlRenderers = {
  // see https://github.com/diegomura/react-pdf/issues/2182
  li: generateCustomLi({ paddingRight: '6px' }, { flexBasis: 0, flexGrow: 1 }),
};
