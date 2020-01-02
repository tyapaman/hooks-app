import { createContext } from 'react'

const AppContext = createContext()

//データを使いたい側（Consumer）と渡したい側（Provider）の双方で使用する
export default AppContext