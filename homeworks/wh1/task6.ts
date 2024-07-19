/** 
 * Задание 6. Алгоритмическая задача — 2 - сделано
Что нужно сделать:
Используя примитивную типизацию с помощью TypeScript, напишите код, который:
принимает число,
возвращает его цифровой корень.
Цифровой корень (также известен как корень по основанию 10) для положительного целого числа определяется как сумма его цифр до тех пор, пока не останется одна цифра.

Например, для числа 942 цифровой корень вычисляется следующим образом: 9 + 4 + 2 = 15, затем 1 + 5 = 6. Получается, что цифровой корень числа 942 равен 6. То же самое справедливо и для числа 493193: 4 + 9 + 3 + 1 + 9 + 3 = 29, затем 2 + 9 = 11, затем 1 + 1 = 2, поэтому цифровой корень числа 493193 равен 2.

Критерии оценки:
Принято:
Функция корректно обрабатывает натуральные числа и ноль.
Использована типизация примитивов.
Аргументы и возвращаемое значение функции типизированы.
На доработку:
Код не проходит все кейсы.
В коде не использована типизация.
Как отправить работу на проверку
Выполните практическую работу в GitLab и приложите ссылку для проверки в окно для сдачи домашнего задания на портале.
 */

function digital_root(n:number):number {return (n==0) ? 0 : 1+(n-1)%9;}

console.log(digital_root(493193))