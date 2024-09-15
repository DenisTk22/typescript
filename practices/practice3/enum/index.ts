const LOCALE = {
    RU: 'ru-RU',
    EN: 'en-US'
} as const;

//чтобы прописать тип у local: LOCALE, нужно написать следующий тип:
type Locale = typeof LOCALE[keyof typeof LOCALE];

declare function translate(locale: Locale, text: string): string;

translate(LOCALE.RU, 'some text');
translate(LOCALE.EN, 'some text');