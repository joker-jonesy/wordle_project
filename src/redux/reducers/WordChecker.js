import {Words} from '../../assets/words/Words';

export default  function C_W(word){
    return Words.some((x)=>x===word)
}