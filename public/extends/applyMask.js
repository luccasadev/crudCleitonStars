import * as cheerio from 'cheerio';

// Função para aplicar a máscara usando cheerio
export const applyMaskToHTML = (html) => {
  const $ = cheerio.load(html);

  $('[mask]').each((i, elem) => {
    const maskUrl = $(elem).attr('mask');
    const classes = $(elem).attr('class') || '';

    let maskWidth = 'auto';
    let maskHeight = 'auto';

    // Expressão regular para buscar tamanhos nas classes
    const widthMatch = classes.match(/w-\[([\d\w]+)\]/);
    const heightMatch = classes.match(/h-\[([\d\w]+)\]/);

    if (widthMatch) {
      maskWidth = widthMatch[1];
    }

    if (heightMatch) {
      maskHeight = heightMatch[1];
    }

    if (maskUrl) {
      // Se o caminho for relativo, ajuste o prefixo conforme necessário
      const fullPath = maskUrl.startsWith('./') ? maskUrl.slice(1) : maskUrl;

      $(elem).css({
        'mask-image': `url(${fullPath})`,
        'mask-repeat': 'no-repeat',
        'mask-position': 'center',
        'mask-size': `${maskWidth} ${maskHeight}`,
        '-webkit-mask-image': `url(${fullPath})`,
        '-webkit-mask-repeat': 'no-repeat',
        '-webkit-mask-position': 'center',
        '-webkit-mask-size': `${maskWidth} ${maskHeight}`,
      });
    }
  });

  return $.html();
}
