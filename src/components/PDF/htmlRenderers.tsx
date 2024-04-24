/* eslint-disable react/display-name */
import { Image, Text, View } from '@react-pdf/renderer';
import { HtmlElement } from 'node_modules/react-pdf-html/dist/types/parse';
import { HtmlRenderer } from 'node_modules/react-pdf-html/dist/types/render';
import { HtmlStyle } from 'react-pdf-html';

// solves text overflow of list elements when rendered by react-pdf-html
// thanks to [justin-hackin](https://github.com/justin-hackin) for the custom renderer

const generateCustomLi =
  (bulletOverrides: any, contentOverrides: any): HtmlRenderer =>
  ({ element, stylesheets, style, children }) => {
    const bulletStyles = stylesheets.map((stylesheet) => stylesheet.li_bullet);
    const contentStyles = stylesheets.map((stylesheet) => ({
      ...stylesheet.li_content,
      flexBasis: 0,
    }));

    const list: HtmlElement = element.closest('ol, ul') as HtmlElement;
    const ordered = list?.tag === 'ol' || element.parentNode.tag === 'ol';
    const listStyle =
      list?.style?.reduce(
        (combined, listStyle) => Object.assign(combined, listStyle),
        {} as HtmlStyle,
      ) || {};
    const itemStyle = element.style.reduce(
      (combined, itemStyle) => Object.assign(combined, itemStyle),
      {} as HtmlStyle,
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
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          src={listStyleType.match(/\((.*?)\)/)[1].replace(/(['"])/g, '')}
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
