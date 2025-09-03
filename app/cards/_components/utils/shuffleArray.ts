export function shuffleArray<T extends Array<any>>(array: T) {
  const newArray = [...(array || [])]
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Случайный индекс от 0 до i
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Обмен элементов
    }
    return newArray;
}