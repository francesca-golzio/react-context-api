import { createContext, useContext, useState } from 'react'

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  const handleBudget = () => setBudgetMode(!budgetMode);

  console.log(budgetMode);

  return (
    <>
      <BudgetContext.Provider
        value={{
          budgetMode,
          setBudgetMode,
          handleBudget
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