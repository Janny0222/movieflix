import React, { useState, useContext, createContext } from 'react'

const ThemeContext = createContext("light")
export const SampleContext = () => {
    const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={theme}>
        <Form />
        <label>
            <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</Button>
        </label>
        
    </ThemeContext.Provider>
  )
}

function Form ({ children }) {
    return (
        <Panel title="welcome">
            <Button> Log In</Button>
            <Button> Sign Up</Button>
        </Panel>
    )
}

function Panel ({title, children}) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button ({ children }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button className={className}>
            {children}
        </button>
    )
}
