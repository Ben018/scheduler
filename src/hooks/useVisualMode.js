import { useState } from "react";

function useVisualMode(initial) {
  // eslint-disable-next-line
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    replace ? setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]) : setHistory(prev => [...prev, newMode])
  }

  function back() {
    history.length > 1 && setHistory(prev => [...prev.slice(0, prev.length - 1)])
  }

  return { mode: history[history.length - 1], transition, back };
}

export default useVisualMode;