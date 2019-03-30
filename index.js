var recipes = {ingredient1: 'eggs', ingredient2:'butter', ingredient3: 'milk'}


function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {key:value})

}
