import { useContext} from "react";
import ThemeContext from "./Context/ThemeContext";

const ThemeSwitcher = () => {
  const { themes, setStateTheme} = useContext(ThemeContext);

  const styleTheme = {
    width: '30px',
    height: '30px',
    border: '3px solid grey',
  }

  const changeTheme = (theme) => {
    setStateTheme(theme)
  }

  return (
    <div className="d-flex flex-row bd-highlight mb-3">
    {themes.map((item) => 
    <button className={item.className} style={styleTheme} id={item.id} key={item.id} onClick={() => changeTheme(item)}></button>
    )}
    </div>
  )
}

export default ThemeSwitcher;