import * as path from "path";
import * as fs from "fs";
import Jimp from "jimp";

const testDir = "kalle_kuvat";

const dpi = 300;
const dpmm = dpi / 25.4;

const fonts = {
  regular32: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_black_32.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_white_32.fnt")
    )
  },
  regular48: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_black_48.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_white_48.fnt")
    )
  },
  regular56: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_black_56.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_white_56.fnt")
    )
  },
  regular64: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_black_64.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_white_64.fnt")
    )
  },
  regular72: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_black_72.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_white_72.fnt")
    )
  },
  regular80: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_black_80.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_white_80.fnt")
    )
  },
  regular96: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_black_96.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_white_96.fnt")
    )
  },
  regular128: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_black_128.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_white_128.fnt")
    )
  },
  regular192: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_black_192.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "regular_white_192.fnt")
    )
  },
  italic32: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_black_32.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_white_32.fnt")
    )
  },
  italic48: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_black_48.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_white_48.fnt")
    )
  },
  italic56: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_black_56.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_white_56.fnt")
    )
  },
  italic64: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_black_64.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_white_64.fnt")
    )
  },
  italic72: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_black_72.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_white_72.fnt")
    )
  },
  italic80: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_black_80.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_white_80.fnt")
    )
  },
  italic96: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_black_96.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_white_96.fnt")
    )
  },
  italic128: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_black_128.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "italic_white_128.fnt")
    )
  },
  bold32: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_black_32.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_white_32.fnt")
    )
  },
  bold48: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_black_48.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_white_48.fnt")
    )
  },
  bold56: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_black_56.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_white_56.fnt")
    )
  },
  bold64: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_black_64.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_white_64.fnt")
    )
  },
  bold72: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_black_72.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_white_72.fnt")
    )
  },
  bold80: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_black_80.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_white_80.fnt")
    )
  },
  bold96: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_black_96.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_white_96.fnt")
    )
  },
  bold128: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_black_128.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_white_128.fnt")
    )
  },
  bold192: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_black_192.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_white_192.fnt")
    )
  },
  bold_italic32: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_32.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_32.fnt")
    )
  },
  bold_italic48: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_48.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_48.fnt")
    )
  },
  bold_italic56: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_56.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_56.fnt")
    )
  },
  bold_italic64: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_64.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_64.fnt")
    )
  },
  bold_italic72: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_72.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_72.fnt")
    )
  },
  bold_italic80: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_80.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_80.fnt")
    )
  },
  bold_italic96: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_96.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_96.fnt")
    )
  },
  bold_italic128: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_128.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_128.fnt")
    )
  },
  black32: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_black_32.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_white_32.fnt")
    )
  },
  black48: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_black_48.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_white_48.fnt")
    )
  },
  black56: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_black_56.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_white_56.fnt")
    )
  },
  black64: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_black_64.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_white_64.fnt")
    )
  },
  black72: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_black_72.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_white_72.fnt")
    )
  },
  black80: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_black_80.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_white_80.fnt")
    )
  },
  black96: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_black_96.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_white_96.fnt")
    )
  },
  black128: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_black_128.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_white_128.fnt")
    )
  },
  black192: {
    black: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_black_192.fnt")
    ),
    white: Jimp.loadFont(
      path.join(__dirname, "..", "Arial_bmfont", "black_white_192.fnt")
    )
  }
};

const getPhoto = async (black: boolean) => {
  const prefix = black ? "black" : "white";

  const logo = {
    white: Jimp.read(path.join(__dirname, "..", "Pora_logo_white.png")),
    black: Jimp.read(path.join(__dirname, "..", "Pora_logo_black.png"))
  };

  Jimp.read(path.join(__dirname, "..", testDir, "isku-16.jpg"))
    .then(async photo => {
      return photo
        .resize(1800, Jimp.AUTO)
        .opacity(0.8)
        .background(0x00ffeeff)
        .posterize(4)
        .brightness(Number(black) - 0.5)
        .blit(await logo[prefix], photo.getWidth() / 2 - 330, 100)
        .print(
          await fonts.black128[prefix],
          photo.getWidth() / 2 - 500,
          800,
          {
            text: "Hello world!",
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
          },
          1000,
          128
        )
        .write(path.join(__dirname, "..", prefix + "_testi.jpg")); // save
    })
    .then(res => console.log("Ready"))
    .catch(err => {
      console.error(err);
    });
};

const findNearest = (arr: number[], num: number): number => {
  if (arr.length === 0) return num;
  let closest = 0;
  let dis = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - num) < dis) {
      closest = arr[i];
      dis = Math.abs(arr[i] - num);
    }
  }
  return closest;
};

const fontSizes = [192, 128, 96, 80, 72, 64, 56, 48, 32].sort((a, b) => b - a);

const testFont = async (
  text: string,
  font: string,
  maxX: number,
  maxY?: number
): Promise<boolean> => {
  if (!(fonts[font] && fonts[font].white)) return false;
  const loadedFont = await fonts[font].white;
  return (
    Jimp.measureText(loadedFont, text) <= maxX &&
    (!maxY || Jimp.measureTextHeight(loadedFont, text, maxX) <= maxY)
  );
};

const calculateMaxFontSize = async (
  text: string,
  fontOrder: string[],
  color: "black" | "white",
  maxX: number,
  maxY?: number
) => {
  const tempFontSizes = fontSizes
    .filter(size => !maxY || size <= maxY)
    .sort((a, b) => b - a);
  for (let i = 0; i < tempFontSizes.length; i++) {
    for (let j = 0; j < fontOrder.length; j++) {
      if (await testFont(text, fontOrder[j] + tempFontSizes[i], maxX, maxY)) {
        const font = await fonts[`${fontOrder[j]}${tempFontSizes[i]}`][color];
        return {
          font,
          size: Jimp.measureTextHeight(font, text, 10000)
        };
      }
    }
  }
  return {
    font: await fonts[`${fontOrder[0]}64`][color],
    size: 64
  };
};

export const generateTicket = async (
  kuva: string,
  vol: number,
  alc: number,
  name: string,
  id: string,
  widthmm: number,
  heightmm: number,
  black: boolean,
  isLogoFirst?: boolean,
  desc?: string
) => {
  const logo50 = {
    black: Jimp.read(path.join(__dirname, "..", "black_50logo.png")),
    white: Jimp.read(path.join(__dirname, "..", "white_50logo.png"))
  };

  const blank = {
    black: Jimp.read(path.join(__dirname, "..", "black64x64.png")),
    white: Jimp.read(path.join(__dirname, "..", "white64x64.png"))
  };

  const logo = {
    white: Jimp.read(path.join(__dirname, "..", "Pora_logo_white.png")),
    black: Jimp.read(path.join(__dirname, "..", "Pora_logo_black.png"))
  };

  const margin = {
    x: (width: number) => 0.02 * width + 10,
    y: (height: number) => 0.02 * height + 10
  };

  const logoFirst = isLogoFirst || Math.random() < 0.5;
  const height = Math.round(dpmm * heightmm);
  const width = Math.round(dpmm * widthmm);
  const wph = width / height;
  const xMargin = margin.x(width);
  const yMargin = margin.y(height);

  //calculate efficent area
  const fontSize = findNearest(fontSizes, Math.min(height * 0.1, width * 0.1));

  const primaryColor = black ? "black" : "white";
  const secondaryColor = black ? "white" : "black";

  const infoFont = await fonts["regular" + fontSize][primaryColor];
  const idFont = await fonts["black" + fontSize][secondaryColor];

  const volText =
    vol < 1 ? `${Math.round(vol * 100)} cl` : `${Math.round(vol * 10) / 10} l`;
  const volTextDim = {
    height: fontSize,
    width: Jimp.measureText(infoFont, volText)
  };

  const alcText = `${Math.round(alc * 1000) / 10} %`;
  const alcTextDim = {
    height: fontSize,
    width: Jimp.measureText(infoFont, alcText)
  };

  const idTextDim = {
    height: fontSize,
    width: Jimp.measureText(idFont, id)
  };

  const blankImgDim = {
    width: idTextDim.width + 2 * xMargin,
    height: idTextDim.height + 2 * yMargin
  };
  const blankImg = await (await blank[primaryColor]).resize(
    blankImgDim.width,
    blankImgDim.height
  );

  const pora50 = await (await logo50[primaryColor]).resize(Jimp.AUTO, fontSize);
  const pora50Dim = {
    height: fontSize,
    width: pora50.getWidth()
  };

  const maxValuesEA = {
    x: Math.max(
      pora50Dim.width,
      idTextDim.width + 2 * xMargin,
      alcTextDim.width + 2 * xMargin,
      volTextDim.width + 2 * xMargin
    ),
    y: fontSize + 2 * yMargin
  };

  const effectiveArea =
    maxValuesEA.x * 2 > 0.4 * width
      ? {
          x: xMargin * 4,
          y: maxValuesEA.y + yMargin,
          width: width - 8 * xMargin,
          height: height - 2 * maxValuesEA.y - 2 * yMargin
        }
      : {
          x: maxValuesEA.x,
          y: maxValuesEA.y,
          width: width - 2 * maxValuesEA.x,
          height: height - 2 * maxValuesEA.y
        };

  const spaceBetweenLogo = 0.1 * effectiveArea.height;
  const descMargin = 0.05 * effectiveArea.height;

  const textFont = await calculateMaxFontSize(
    name,
    ["black", "bold", "regular"],
    primaryColor,
    effectiveArea.width,
    !desc ? 0.4 * effectiveArea.height : 0.3 * effectiveArea.height
  );
  const descFont =
    !!desc &&
    (await calculateMaxFontSize(
      desc,
      ["italic"],
      primaryColor,
      effectiveArea.width,
      Math.min(
        effectiveArea.height * 0.7 - textFont.size - descMargin,
        textFont.size
      )
    ));

  const usedLogoSize =
    effectiveArea.height -
    spaceBetweenLogo -
    textFont.size -
    (desc ? descFont.size + descMargin : 0);

  const logoSize = Math.min(effectiveArea.width, usedLogoSize);

  const logoImg = await (await logo[primaryColor]).resize(logoSize, logoSize);

  const logoPos = {
    x: effectiveArea.x + effectiveArea.width / 2 - logoSize / 2,
    y: logoFirst
      ? effectiveArea.y + (usedLogoSize - logoSize) / 2
      : effectiveArea.y +
        (usedLogoSize - logoSize) / 2 +
        textFont.size +
        spaceBetweenLogo +
        descFont.size +
        descMargin
  };

  const textFontPos = {
    x:
      effectiveArea.x +
      effectiveArea.width / 2 -
      Jimp.measureText(textFont.font, name) / 2,
    y: logoFirst
      ? effectiveArea.y + usedLogoSize + spaceBetweenLogo
      : effectiveArea.y
  };

  const descFontPos = descFont && {
    x:
      effectiveArea.x +
      effectiveArea.width / 2 -
      Jimp.measureText(descFont.font, desc) / 2,
    y: logoFirst
      ? effectiveArea.y +
        usedLogoSize +
        spaceBetweenLogo +
        descMargin +
        textFont.size
      : effectiveArea.y + descMargin + textFont.size
  };

  Jimp.read(path.join(__dirname, "..", `kuvat_${primaryColor}/${kuva}`)).then(
    async photo => {
      const photowph = photo.getWidth() / photo.getHeight();
      const ret =
        photowph > wph
          ? photo
              .resize(Jimp.AUTO, height)
              .crop(
                ((height / photo.getHeight()) * photo.getWidth() - width) / 2,
                0,
                width,
                height
              )
          : photo
              .resize(width, Jimp.AUTO)
              .crop(
                0,
                ((width / photo.getWidth()) * photo.getHeight() - height) / 2,
                width,
                height
              );
      ret
        .blit(blankImg, 0, height - blankImgDim.height)
        .print(infoFont, xMargin, yMargin, volText)
        .print(infoFont, width - xMargin - alcTextDim.width, yMargin, alcText)
        .print(idFont, xMargin, height - yMargin - idTextDim.height, id)
        .blit(
          pora50,
          width - xMargin - pora50Dim.width,
          height - yMargin - pora50Dim.height
        )
        .blit(logoImg, logoPos.x, logoPos.y)
        .print(textFont.font, textFontPos.x, textFontPos.y, name);
      if (desc) {
        ret.print(descFont.font, descFontPos.x, descFontPos.y, desc);
      }
      ret.write(path.join(__dirname, "..", "etiketit", `${name}_${id}.jpg`));
    }
  );
};
