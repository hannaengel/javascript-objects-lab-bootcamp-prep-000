var recipes = {ingredient1: 'eggs', ingredient2:'butter', ingredient3: 'milk'}


function updateObjectWithKeyAndValue(object, key, value){
  return object[key] = value
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value})

}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
   return object

}
function deleteFromObjectByKey(object, key){
  return Object.assign({}, object).delete[key]
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key]
}
