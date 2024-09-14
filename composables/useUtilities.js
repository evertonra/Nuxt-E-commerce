export const useUtilities = () => {
  function capitalizeFirstLetter(str) {
    if (!str) return ""; // Verifica se a string não está vazia
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return {
    capitalizeFirstLetter,
  };
};
