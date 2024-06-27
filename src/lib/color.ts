const RGB_MAX = 255;
const HUE_MAX = 360;
const SV_MAX = 100;

type HSV = {
    h: number;
    s: number;
    v: number;
};

type RGB = {
    r: number;
    g: number;
    b: number;
};

const rgbToHsv = (r:number, g:number, b:number) : HSV => {

    // It converts [0,255] format, to [0,1]
    r /= RGB_MAX;
    g /= RGB_MAX;
    b /= RGB_MAX;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s, v = max;

    const diff = max - min;

    s = max === 0 ? 0 : diff / max;

    if (max !== min) {
        switch (max) {
            case r:
                h = (g - b) / diff + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / diff + 2;
                break;
            case b:
                h = (r - g) / diff + 4;
                break;
        }
        h /= 6;
    }
    return {
        h: Math.round(h * HUE_MAX),
        s: Math.round(s * SV_MAX),
        v: Math.round(v * SV_MAX)
    };
};

const hexToRgb = (hex: string): RGB => {
    const r: number = parseInt(hex.substring(1, 3), 16);
    const g: number = parseInt(hex.substring(3, 5), 16);
    const b: number = parseInt(hex.substring(5), 16);
    return { r, g, b };
};

const hexToHsv = (hex: string): HSV => {
    const rgb = hexToRgb(hex);
    return rgbToHsv(rgb.r, rgb.g, rgb.b);
}

const hsvToRgb = (h: number, s:number, v:number): RGB => {

    h = (h % HUE_MAX + HUE_MAX) % HUE_MAX;
    h = h * 6 / HUE_MAX;
    s /= SV_MAX;
    v /= SV_MAX;

    const i = Math.floor(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const mod = i % 6;
    const r = [v, q, p, p, t, v][mod];
    const g = [t, v, v, q, p, p][mod];
    const b = [p, p, t, v, v, q][mod];

    return {
        r: Math.floor(r * RGB_MAX),
        g: Math.floor(g * RGB_MAX),
        b: Math.floor(b * RGB_MAX),
    };
};

const rgbToHex = (r:number, g:number, b:number): string => {
    const rStr = r.toString(16).padStart(2, '0');
    const gStr = g.toString(16).padStart(2, '0');
    const bStr = b.toString(16).padStart(2, '0');
    return `#${rStr}${gStr}${bStr}`;
}

const hsvToHex = (h:number, s:number, v:number): string => {
    const rgb = hsvToRgb(h, s, v);
    return rgbToHex(rgb.r, rgb.g, rgb.b);
}

const getFactor = (n: number, factor: number, max: number): number => {
    let result = n * factor;
    return result <= max ? result : max;
};

export const getLighterColor = (hex: string) => {
    let { h, s, v } = hexToHsv(hex);
    return hsvToHex(h,
        getFactor(s, 0.9, SV_MAX),
        getFactor(v, 1.05, SV_MAX));
};

export const getDarkerColor = (hex: string) => {
    let { h, s, v } = hexToHsv(hex);
    return hsvToHex(h,
        getFactor(s, 0.9, SV_MAX),
        getFactor(v, 0.85, SV_MAX));
};

export const getAccessibleTextColor = (hex: string) => {
    const { r, g, b } = hexToRgb(hex);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? "#000000" : "#ffffff"
};