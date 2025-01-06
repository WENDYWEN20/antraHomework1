const localStorageMiddleWare=(store)=>(next)=>(action)=>{
    console.log(action)
    next(action)
}
export default localStorageMiddleWare