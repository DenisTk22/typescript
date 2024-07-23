import { sum, sub, mul, div } from './math'; // именнованные импорты, лючше их использовать
import oof from './math' // название для export default может быть любым

import { sum1 } from './math/sum'
import { sub1 } from './math/sub'
import { mul1 } from './math/mul'
import { div1 } from './math/div'

import {} from './math'

sum(1, 2);
sub(1, 2);
mul(1, 2);
div(1, 2);

oof();

sum1(1, 2);
sub1(1, 2);
mul1(1, 2);
div1(1, 2);