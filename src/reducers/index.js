//action = {
//  type: 'CREATE?EVENT',
//  tittle: 'title',
//  body: 'body'
//}
//
//state = []
//state = [
//  {id:1, title:'titel', body:'body'},
//  {id:2, title:'titel', body:'body'},
//  {id:3, title:'titel', body:'body'}
//]

const events = (state=[], action) => {
  switch(action.type){
    case CREATE:
      const event = {title: action.title, body: action.body}
      const length = state.length
      let id = length === 0 ? 1 : state[length - 1 ].id +1
      return [...state,{id, ...event}]
    case DELETE:
    case ALL_DELETE:
    default:
       throw new Error
  }
}

export default events