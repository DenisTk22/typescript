// import { LOCALE_RU, LOCALE_EN } from './locale';
import { LOCALE } from './locale';

declare function translate(local: 'ru-RU' | 'en-US', text: string): string;

translate(LOCALE.RU, 'some text'); // Будет ошибка 'Argument of type 'string' is not assignable to parameter of type '"ru-RU" | "en-US"'.', т.к. объект LOCALE не является константным, нужно в locale.ts у LOCALE добавить as const
translate(LOCALE.EN, 'some text');