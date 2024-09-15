// const LOCALE = {
//     RU: 'ru-RU',
//     EN: 'en-US'
// } as const;

//enum похожи на объекты и могут использоваться в качестве типов

enum Locale_enum {
    RU = 'ru-RU',
    EN = 'en-US'
}

declare function translate(locale: Locale_enum, text: string): string;

const ru: Locale_enum = Locale_enum.EN

translate(Locale_enum.RU, 'some text');
translate(Locale_enum.EN, 'some text');