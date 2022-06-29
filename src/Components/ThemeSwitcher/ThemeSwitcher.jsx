import { useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import cn from "classnames";
import "./ThemeSwitcher.css"

const ThemeSwitcher = () => {
  const { themes, setStateTheme} = useContext(ThemeContext);
  
  const changeTheme = (theme) => {
    setStateTheme(theme)
  }

  return (
    <div className="d-flex flex-row bd-highlight mb-3">
      {themes.map((item) => {
        const classNameButton = cn('styleTheme', item.className)
        return (<button className={classNameButton} id={item.id} key={item.id} onClick={() => changeTheme(item)}/>)
      }
      )}
    </div>
  )
}

export default ThemeSwitcher;