"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var jimp_1 = __importDefault(require("jimp"));
var testDir = "kalle_kuvat";
var outDir = "testi_kuvat";
/*
fs.readdir(path.join(__dirname, "..", testDir), (err, files) => {
  files.forEach(file => {
    Jimp.read(path.join(__dirname, "..", testDir, file))
      .then(photo => {
        return photo
          .resize(1800, Jimp.AUTO)
          .opacity(0.8)
          .background(0x00ffeeff)
          .posterize(4)
          .brightness(-0.5)
          .write(path.join(__dirname, "..", outDir, file)); // save
      })
      .catch(err => {
        console.error(err);
      });
  });
});*/
var dpi = 300;
var dpmm = dpi / 25.4;
var fonts = {
    regular64: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_black_64.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_white_64.fnt"))
    },
    regular72: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_black_72.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_white_72.fnt"))
    },
    regular80: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_black_80.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_white_80.fnt"))
    },
    regular96: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_black_96.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_white_96.fnt"))
    },
    regular128: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_black_128.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_white_128.fnt"))
    },
    regular192: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_black_192.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "regular_white_192.fnt"))
    },
    italic64: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_black_64.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_white_64.fnt"))
    },
    italic72: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_black_72.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_white_72.fnt"))
    },
    italic80: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_black_80.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_white_80.fnt"))
    },
    italic96: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_black_96.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_white_96.fnt"))
    },
    italic128: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_black_128.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "italic_white_128.fnt"))
    },
    bold64: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_black_64.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_white_64.fnt"))
    },
    bold72: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_black_72.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_white_72.fnt"))
    },
    bold80: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_black_80.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_white_80.fnt"))
    },
    bold96: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_black_96.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_white_96.fnt"))
    },
    bold128: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_black_128.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_white_128.fnt"))
    },
    bold192: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_black_192.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_white_192.fnt"))
    },
    bold_italic64: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_64.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_64.fnt"))
    },
    bold_italic72: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_72.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_72.fnt"))
    },
    bold_italic80: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_80.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_80.fnt"))
    },
    bold_italic96: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_96.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_96.fnt"))
    },
    bold_italic128: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_black_128.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "bold_italic_white_128.fnt"))
    },
    black64: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_black_64.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_white_64.fnt"))
    },
    black72: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_black_72.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_white_72.fnt"))
    },
    black80: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_black_80.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_white_80.fnt"))
    },
    black96: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_black_96.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_white_96.fnt"))
    },
    black128: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_black_128.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_white_128.fnt"))
    },
    black192: {
        black: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_black_192.fnt")),
        white: jimp_1.default.loadFont(path.join(__dirname, "..", "Arial_bmfont", "black_white_192.fnt"))
    }
};
var logo = {
    white: jimp_1.default.read(path.join(__dirname, "..", "Pora_logo_white.png")),
    black: jimp_1.default.read(path.join(__dirname, "..", "Pora_logo_black.png"))
};
var getPhoto = function (black) { return __awaiter(void 0, void 0, void 0, function () {
    var prefix;
    return __generator(this, function (_a) {
        prefix = black ? "black" : "white";
        jimp_1.default.read(path.join(__dirname, "..", testDir, "isku-16.jpg"))
            .then(function (photo) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _c = (_b = photo
                            .resize(1800, jimp_1.default.AUTO)
                            .opacity(0.8)
                            .background(0x00ffeeff)
                            .posterize(4)
                            .brightness(Number(black) - 0.5)).blit;
                        return [4 /*yield*/, logo[prefix]];
                    case 1:
                        _d = (_a = _c.apply(_b, [_e.sent(), photo.getWidth() / 2 - 330, 100])).print;
                        return [4 /*yield*/, fonts.black128[prefix]];
                    case 2: return [2 /*return*/, _d.apply(_a, [_e.sent(),
                            photo.getWidth() / 2 - 500,
                            800,
                            {
                                text: "Hello world!",
                                alignmentX: jimp_1.default.HORIZONTAL_ALIGN_CENTER,
                                alignmentY: jimp_1.default.VERTICAL_ALIGN_MIDDLE
                            },
                            1000,
                            128])
                            .write(path.join(__dirname, "..", prefix + "_testi.jpg"))]; // save
                }
            });
        }); })
            .then(function (res) { return console.log("Ready"); })
            .catch(function (err) {
            console.error(err);
        });
        return [2 /*return*/];
    });
}); };
var findNearest = function (arr, num) {
    var sorted = arr.sort();
    if (arr.length === 0)
        return num;
    var closest = 0;
    var dis = Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i] - num) < dis) {
            closest = arr[i];
        }
    }
    return closest;
};
var generateTicket = function (vol, alc, name, id, widthmm, heightmm) { return __awaiter(void 0, void 0, void 0, function () {
    var height, width, wph, fontSize;
    return __generator(this, function (_a) {
        height = Math.round(dpmm * heightmm);
        width = Math.round(dpmm * widthmm);
        wph = width / height;
        fontSize = findNearest([64, 72, 80, 96, 128, 192], height * 0.1);
        jimp_1.default.read(path.join(__dirname, "..", "black_testi.jpg")).then(function (photo) { return __awaiter(void 0, void 0, void 0, function () {
            var photowph, ret;
            return __generator(this, function (_a) {
                photowph = photo.getWidth() / photo.getHeight();
                ret = photowph > wph
                    ? photo.resize(jimp_1.default.AUTO, height).crop(0, 0, width, height)
                    : photo.resize(width, jimp_1.default.AUTO).crop(0, 0, width, height);
                ret.write(path.join(__dirname, "..", "resize_testi.jpg"));
                return [2 /*return*/];
            });
        }); });
        return [2 /*return*/];
    });
}); };
//getPhoto(true);
//getPhoto(false);
generateTicket(0.5, 0.4, "Karhu", "03", 15);
