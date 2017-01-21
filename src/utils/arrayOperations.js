
import _ from 'lodash';

export function immutableSplice(arr, start, deleteCount, ...items) {
  return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}

export function immutableDelete (arr, index) {
   return arr.slice(0,index).concat(arr.slice(index+1))
}

export function immutableUpdateItem(arr, itemToUpdate){
    var newArr = [ ... arr ];

    var match = _.find(newArr, {id:itemToUpdate.id});
    if(match){
        var index = _.indexOf(newArr, _.find(newArr, {id:itemToUpdate.id}));
        newArr.splice(index, 1, itemToUpdate);
    } else {
        newArr.push(itemToUpdate);
    }

    return newArr;
}