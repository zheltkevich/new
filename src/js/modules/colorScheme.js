const meta = document.querySelector('meta[name="theme-color"]');
const html = document.firstElementChild;
const prefersLightScheme = matchMedia('(prefers-color-scheme: light)');
const prefersDarkScheme = matchMedia('(prefers-color-scheme: dark)');

export const COLOR_SCHEMES = [
    {
        id: 'auto',
        name: 'Auto',
    },
    {
        id: 'light',
        name: 'Light',
        curtainColor: 'hsl(200 25% 90%)',
    },
    {
        id: 'dark',
        name: 'Dark',
        curtainColor: 'hsl(200 10% 10%)',
    },
    {
        id: 'dim',
        name: 'Dim',
        curtainColor: 'hsl(200 10% 20%)',
    },
];

export const setTopCurtainColor = scheme => {
    const currentScheme = COLOR_SCHEMES.find(item => item.id === scheme);
    const ligthScheme = COLOR_SCHEMES.find(item => item.id === 'light');
    const darkScheme = COLOR_SCHEMES.find(item => item.id === 'dark');

    if (scheme === 'auto') {
        if (prefersLightScheme.matches) meta.setAttribute('content', ligthScheme.curtainColor);
        else if (prefersDarkScheme.matches) meta.setAttribute('content', darkScheme.curtainColor);
    } else {
        meta.setAttribute('content', currentScheme.curtainColor);
    }
};

export const saveScheme = scheme => {
    html.setAttribute('color-scheme', scheme);
    localStorage.setItem('color-scheme', scheme);
    setTopCurtainColor(scheme);
};

export const getSavedScheme = () => localStorage.getItem('color-scheme');
export const initColorScheme = () => {
    const savedScheme = getSavedScheme();

    if (savedScheme === null) saveScheme('auto');
    else saveScheme(savedScheme);
};

export default initColorScheme();


