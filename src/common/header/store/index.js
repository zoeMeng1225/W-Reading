import reducer from './reducer';
import * as actionCreator from './actionCreator';
import * as constants from './constants';

//通过引用index.js来间接引入reducer, 
//好处： 在store 下面的reducer 要想引入header 下面的reducerr时，引用路径就会相对短。目示结构会少两层

export {reducer, actionCreator, constants};