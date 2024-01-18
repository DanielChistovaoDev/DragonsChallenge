export const sortAlphabetically = (arrayParam: any, atributeToSort: string) => {
    const sortedArray = [...arrayParam].sort((a, b) => {
      const valueA = Array.isArray(a[atributeToSort]) ? a[atributeToSort][0] : a[atributeToSort];
      const valueB = Array.isArray(b[atributeToSort]) ? b[atributeToSort][0] : b[atributeToSort];

      return valueA.toString().localeCompare(valueB.toString());
    });

    return sortedArray;
};