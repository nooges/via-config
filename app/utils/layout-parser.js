export const MATRIX_M6_A = `
#define LAYOUT(                         \
    K00, K01, K02, K03, K04, K05)       \
    {                                   \
        {K00, K01, K02, K03, K04, K05}, \
    }
`;

export const MATRIX_M6_B = `
#define LAYOUT(                         \
    K00, K01, K02, K03, K04, K05)       \
    {                                   \
        {K00, K01, K02, K03, K04, K05}, \
    }
`;

export const MATRIX_M60_A = `
#define LAYOUT_60_hhkb( \
    K00, K01, K02, K03, K04, K05, K06, K07, K08, K09, K0A, K0B, K0C, K0D, K2D, \
    K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K1A, K1B, K1C, K1D, \
    K20, K21, K22, K23, K24, K25, K26, K27, K28, K29, K2A, K2B, K2C,      \
    K30,      K32, K33, K34, K35, K36, K37, K38, K39, K3A, K3B, K3C, K3D, \
         K41, K42,                     K47,                K4B, K4C       \
) { \
    { K00, K01, K02, K03, K04, K05, K06, K07, K08, K09, K0A, K0B, K0C, K0D }, \
    { K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K1A, K1B, K1C, K1D }, \
    { K20, K21, K22, K23, K24, K25, K26, K27, K28, K29, K2A, K2B, K2C, K2D }, \
    { K30, XXX, K32, K33, K34, K35, K36, K37, K38, K39, K3A, K3B, K3C, K3D }, \
    { XXX, K41, K42, XXX, XXX, XXX, XXX, K47, XXX, XXX, XXX, K4B, K4C, XXX }  \
}
`;

export const MATRIX_KOYU = `
#define LAYOUT_all( \
    K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, K013, K213, K014, \
    K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113,       K114, \
    K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212,             K214, \
    K300, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312,             K313, K314, \
    K400, K401, K402,                   K407,                         K411,       K412, K413, K414  \
) { \
    { K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, K013, K014 }, \
    { K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113, K114 }, \
    { K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212, K213, K214 }, \
    { K300, ____, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312, K313, K314 }, \
    { K400, K401, K402, ____, ____, ____, ____, K407, ____, ____, ____, K411, K412, K413, K414 }  \
}
`;

export const MATRIX_ZEAL60 = `
#define LAYOUT_60_all( \
    K00, K01, K02, K03, K04, K05, K06, K07, K08, K09, K0A, K0B, K0C, K0D, K2D, \
    K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K1A, K1B, K1C, K1D, \
    K20, K21, K22, K23, K24, K25, K26, K27, K28, K29, K2A, K2B, K2C,      \
    K30, K31, K32, K33, K34, K35, K36, K37, K38, K39, K3A, K3B, K3C, K3D, \
    K40, K41, K42,                     K47,           K4A, K4B, K4C, K4D  \
) { \
    { K00, K01, K02, K03, K04, K05, K06, K07, K08, K09, K0A, K0B, K0C, K0D }, \
    { K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K1A, K1B, K1C, K1D }, \
    { K20, K21, K22, K23, K24, K25, K26, K27, K28, K29, K2A, K2B, K2C, K2D }, \
    { K30, K31, K32, K33, K34, K35, K36, K37, K38, K39, K3A, K3B, K3C, K3D }, \
    { K40, K41, K42, XXX, XXX, XXX, XXX, K47, XXX, XXX, K4A, K4B, K4C, K4D }  \
}
`;

export const MATRIX_ZEAL65 = `
#define LAYOUT_65_split_bs( \
    K00, K01, K02, K03, K04, K05, K06, K07, K08, K09, K0A, K0B, K0C, K0D, K2D, K0E, \
    K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K1A, K1B, K1C, K1D, K1E, \
    K20, K21, K22, K23, K24, K25, K26, K27, K28, K29, K2A, K2B, K2C,      K2E, \
    K30,      K32, K33, K34, K35, K36, K37, K38, K39, K3A, K3B, K3C, K3D, K3E, \
    K40, K41,                          K47,           K4A, K4B, K4C, K4D, K4E  \
) { \
    { K00, K01, K02, K03, K04, K05, K06, K07, K08, K09, K0A, K0B, K0C, K0D, K0E }, \
    { K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K1A, K1B, K1C, K1D, K1E }, \
    { K20, K21, K22, K23, K24, K25, K26, K27, K28, K29, K2A, K2B, K2C, K2D, K2E }, \
    { K30, XXX, K32, K33, K34, K35, K36, K37, K38, K39, K3A, K3B, K3C, K3D, K3E }, \
    { K40, K41, XXX, XXX, XXX, XXX, XXX, K47, XXX, XXX, K4A, K4B, K4C, K4D, K4E }  \
}
`;

export const MATRIX_WT60_A = `
#define LAYOUT_60_ansi_split_bs_rshift( \
  K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, K013, K213, \
  K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113,       \
  K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212,             \
  K300,       K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312, K313,       \
  K400, K401, K402,                   K406,                   K410, K411, K412, K413        \
) { \
  { K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, K013 }, \
  { K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113 }, \
  { K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212, K213 }, \
{ K300, ____, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312, K313 }, \
  { K400, K401, K402, ____, ____, ____, K406, ____, ____, ____, K410, K411, K412, K413 }  \
}
`;

export const MATRIX_WT65_A = `
#define LAYOUT_all( \
  K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, K013, K213, K014, \
  K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113,       K114, \
  K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212,             K214, \
  K300, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312,             K313, K314, \
  K400, K401, K402,                   K406,                   K410, K411,       K412, K413, K414  \
) { \
  { K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, K013, K014 }, \
  { K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113, K114 }, \
  { K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212, K213, K214 }, \
{ K300, ____, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312, K313, K314 }, \
  { K400, K401, K402, ____, ____, ____, K406, ____, ____, ____, K410, K411, K412, K413, K414 }  \
}
`;

export const MATRIX_WT80_A_all = `
#define LAYOUT_all( \
    K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012,             K014, K015, K016, \
    K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113, K313, K114, K115, K116, \
    K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212, K213,       K214, K215, K216, \
    K300, K301, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312,                               \
    K400,       K402, K403, K404, K405, K406, K407, K408, K409, K410, K411, K412, K413,             K415,       \
    K500, K501, K502,                   K506,                   K510, K511, K512, K513,       K514, K515, K516  \
) { \
    { K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, ____, K014, K015, K016 }, \
    { K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113, K114, K115, K116 }, \
    { K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212, K213, K214, K215, K216 }, \
    { K300, K301, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312, K313, ____, ____, ____ }, \
	{ K400, ____, K402, K403, K404, K405, K406, K407, K408, K409, K410, K411, K412, K413, ____, K415, ____ }, \
    { K500, K501, K502, ____, ____, ____, K506, ____, ____, ____, K510, K511, K512, K513, K514, K515, K516 }  \
}
`;

export const MATRIX_WT80_A_no_splits = `
#define LAYOUT_no_split( \
  K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012,             K014, K015, K016, \
  K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113,       K114, K115, K116, \
  K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212, K213,       K214, K215, K216, \
  K300, K301, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312,                               \
  K400,       K402, K403, K404, K405, K406, K407, K408, K409, K410, K411, K412,                   K415,       \
  K500, K501, K502,                   K506,                   K510, K511, K512, K513,       K514, K515, K516  \
) { \
  { K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, ____, K014, K015, K016 }, \
  { K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113, K114, K115, K116 }, \
  { K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212, K213, K214, K215, K216 }, \
  { K300, K301, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312, K313, ____, ____, ____ }, \
{ K400, ____, K402, K403, K404, K405, K406, K407, K408, K409, K410, K411, K412, K413, ____, K415, ____ }, \
  { K500, K501, K502, ____, ____, ____, K506, ____, ____, ____, K510, K511, K512, K513, K514, K515, K516 }  \
}
`;

export const MATRIX_TF68 = `
#define LAYOUT( \
  A1, A2, A3, A4, A5, A6, A7, A8, E1, E2, E3, E4, E5, E6,     E7, E8, \
  B1, B2, B3, B4, B5, B6, B7, B8, F1, F2, F3, F4, F5, F6,     F7, F8, \
  C1,  C2, C3, C4, C5, C6, C7, C8, G1, G2, G3, G4,    G5, \
  D1,   D2, D3, D4, D5, D6, D7, D8, H1, H2, H3,      H4,      H5, \
  J1,  J2,  J3,          J5,           J7,   J8,   H6,    G6, G7, G8 \
) { \
  { A1, A2, A3, A4, A5, A6, A7, A8 }, \
  { B1, B2, B3, B4, B5, B6, B7, B8 }, \
  { C1, C2, C3, C4, C5, C6, C7, C8 }, \
  { D1, D2, D3, D4, D5, D6, D7, D8 }, \
  { E1, E2, E3, E4, E5, E6, E7, E8 }, \
  { F1, F2, F3, F4, F5, F6, F7, F8 }, \
  { G1, G2, G3, G4, G5, G6, G7, G8 }, \
  { H1, H2, H3, H4, H5, H6, KC_NO, KC_NO }, \
  { J1, J2, J3, KC_NO, J5, KC_NO, J7, J8 } \
}
`;

const LS = {
  START: 1,
  DEFINE: 2,
  LAYOUT1D_START: 3,
  LAYOUT1D_END: 4,
  LAYOUT2D_START: 5,
  LAYOUT2D_ROW_START: 6,
  LAYOUT2D_COL_START: 7,
  LAYOUT2D_COL_CONTINUE: 8,
  LAYOUT2D_COL_END: 9,
  LAYOUT2D_ROW_END: 10,
  LAYOUT2D_END: 11
};

export const MatrixLayout = {
  'RAMA WORKS M6-A': parseLayout(MATRIX_M6_A),
  'RAMA WORKS M6-B': parseLayout(MATRIX_M6_B),
  'RAMA WORKS M60-A': parseLayout(MATRIX_M60_A),
  'RAMA WORKS KOYU': parseLayout(MATRIX_KOYU),
  'RAMA WORKS U80-A': parseLayout(MATRIX_WT80_A_no_splits),
  ZEAL60: parseLayout(MATRIX_ZEAL60),
  ZEAL65: parseLayout(MATRIX_ZEAL65),
  'WT60-A': parseLayout(MATRIX_WT60_A),
  'WT65-A': parseLayout(MATRIX_WT65_A),
  'WT80-A': parseLayout(MATRIX_WT80_A_no_splits),
  TRAGICFORCE68: parseLayout(MATRIX_TF68),
};

function error(state, nextToken) {
  console.error('Current State', state, 'Next: ', nextToken);
}

function tokenizer(state, next) {
  const tnext = next.trim();
  const {prev, res} = state;
  // skip empty strings
  if (tnext === '') {
    return state;
  }

  if (prev === LS.START) {
    // skip
    if (tnext === '#define') {
      return {...state, prev: LS.DEFINE};
    }
  } else if (prev === LS.DEFINE) {
    const parenIdx = tnext.indexOf('(');
    const length = tnext.length;
    // If the ( is the last character of the token we're good :)
    if (parenIdx === length - 1) {
      const name = tnext.slice(0, length - 1);
      return {
        ...state,
        prev: LS.LAYOUT1D_START,
        res: {
          name,
          layout1D: [],
          layout2D: []
        }
      };
    }
  } else if (prev === LS.LAYOUT1D_START) {
    const commaIdx = tnext.indexOf(',');

    if (commaIdx === 0) {
      return tokenizer(state, tnext.slice(1));
    }

    const parenIdx = tnext.indexOf(')');
    const length = tnext.length;
    if (parenIdx === 0) {
      return tokenizer(
        {
          ...state,
          prev: LS.LAYOUT1D_END,
          res: {...res, layout2D: [[]]}
        },
        tnext.slice(1)
      );
    } else if (commaIdx === length - 1) {
      const keycode = tnext.slice(0, length - 1);
      const {layout1D} = res;
      return {
        ...state,
        prev: LS.LAYOUT1D_START,
        res: {...res, layout1D: [...layout1D, keycode]}
      };
    } else if (parenIdx === length - 1) {
      const keycode = tnext.slice(0, length - 1);
      const {layout1D} = res;
      return {
        ...state,
        prev: LS.LAYOUT1D_END,
        res: {...res, layout1D: [...layout1D, keycode], layout2D: [[]]}
      };
    } else if (parenIdx === -1 && commaIdx === -1) {
      const keycode = tnext;
      const {layout1D} = res;
      return {
        ...state,
        prev: LS.LAYOUT1D_START,
        res: {...res, layout1D: [...layout1D, keycode], layout2D: [[]]}
      };
    }
  } else if (prev === LS.LAYOUT1D_END) {
    const parenIdx = tnext.indexOf('{');
    const length = tnext.length;
    if (tnext[0] === '{') {
      return tokenizer(
        {
          ...state,
          prev: LS.LAYOUT2D_START
        },
        tnext.slice(1)
      );
    }
  } else if (prev === LS.LAYOUT2D_START) {
    if (tnext[0] === '{') {
      return tokenizer(
        {
          ...state,
          prev: LS.LAYOUT2D_COL_START
        },
        tnext.slice(1)
      );
    }
  } else if (prev === LS.LAYOUT2D_COL_END) {
    if (tnext[0] === ',') {
      return tokenizer(
        {
          ...state,
          prev: LS.LAYOUT2D_COL_END
        },
        tnext.slice(1)
      );
    } else if (tnext[0] === '}') {
      return state;
    } else if (tnext[0] === '{') {
      return tokenizer(
        {
          ...state,
          prev: LS.LAYOUT2D_COL_START,
          res: {...res, layout2D: [...res.layout2D, []]}
        },
        tnext.slice(1)
      );
    }
  } else if (prev === LS.LAYOUT2D_COL_START) {
    const commaIdx = tnext.indexOf(',');
    const bracketIdx = tnext.indexOf('}');
    if (commaIdx === 0) {
      return tokenizer(state, tnext.slice(1));
    }

    if (bracketIdx === 0) {
      const {layout2D} = res;
      return tokenizer(
        {
          ...state,
          prev: LS.LAYOUT2D_COL_END,
          res: {...res, layout2D: [...layout2D]}
        },
        tnext.slice(bracketIdx)
      );
    } else if (bracketIdx > 0) {
      const {layout2D} = res;
      const lastRow = layout2D[layout2D.length - 1];
      layout2D[layout2D.length - 1] = [...lastRow, tnext.slice(0, bracketIdx)];
      return tokenizer(
        {
          ...state,
          prev: LS.LAYOUT2D_COL_END,
          res: {...res, layout2D: [...layout2D]}
        },
        tnext.slice(bracketIdx)
      );
    } else if (commaIdx !== -1) {
      const {layout2D} = res;
      const lastRow = layout2D[layout2D.length - 1];
      layout2D[layout2D.length - 1] = [...lastRow, tnext.slice(0, commaIdx)];
      return tokenizer(
        {
          ...state,
          prev: LS.LAYOUT2D_COL_START,
          res: {...res, layout2D}
        },
        tnext.slice(commaIdx)
      );
    } else if (bracketIdx === -1 && commaIdx === -1) {
      const {layout2D} = res;
      const lastRow = layout2D[layout2D.length - 1];
      layout2D[layout2D.length - 1] = [...lastRow, tnext];
      return {
        ...state,
        prev: LS.LAYOUT2D_COL_START,
        res: {...res, layout2D}
      };
    }
  }
  error(state, tnext);
  throw 'Bad Token found';
}

export function parseLayout(layout) {
  const tokens = layout.split(/\s+/g);
  const {res} = tokens.reduce(tokenizer, {prev: LS.START, res: {}});
  const {layout1D, layout2D} = res;
  const indexMap = Object.assign(
    {},
    ...layout2D.map((arr, i) =>
      Object.assign(
        {},
        ...arr.map((val, j) => ({
          [val]: {col: j, row: i}
        }))
      )
    )
  );
  return layout1D.map(val => indexMap[val]);
}
