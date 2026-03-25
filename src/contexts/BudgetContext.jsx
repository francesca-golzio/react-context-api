import { createContext, useContext, useEffect, useState } from 'react'

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  const handleBudget = () => setBudgetMode(!budgetMode);

  const budgetBtnContenct = (budgetMode) ?
  <><i className="bi bi-toggle-on"></i> Disattiva Modalità Budget</>
  :
  <><i className="bi bi-toggle-off"></i> Attiva Modalità Budget</>;

  //console.log(budgetMode);
  
  useEffect(() => {
    console.log('lo stato è cambiato');
    
    //⚠️ qui manca la logica, bisognerebbe spostarla qui dentro

  }, [budgetMode])


  return (
    <>
      <BudgetContext.Provider
        value={{
          budgetMode,
          setBudgetMode,
          handleBudget,
          budgetBtnContenct
        }}>
        {children}
      </BudgetContext.Provider>
    </>
  )
}

function useBudget() {
  const context = useContext(BudgetContext);
  return context;
}

export { BudgetProvider, useBudget }