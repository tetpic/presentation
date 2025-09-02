export async function uploadFile(): Promise<any> {
  return new Promise((resolve, reject) => {
    // Создаем элемент input
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.ttpc';  // Ограничиваем выбор файла только JSON

    fileInput.onchange = (event: any) => {
      const file = event.target.files?.[0]; // Получаем файл
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              try {
                  const jsonString = e.target.result as string; // Получаем содержимое файла
                  const jsonObject = JSON.parse(jsonString); // Преобразуем строку в объект (если нужно)
                  resolve(jsonObject); // Разрешаем промис с объектом
              } catch (error) {
                  reject('Ошибка разбора JSON: ' + error); // Отклоняем промис с ошибкой
              }
          };
          reader.onerror = function() {
              reject('Ошибка чтения файла'); // Отклоняем промис при ошибке чтения
          };
          reader.readAsText(file); // Читаем файл как текст
        } else {
          reject('Файл не выбран'); // Отклоняем промис, если файл не выбран
        }
      };
      fileInput.click(); // Открываем диалог выбора файла
    });
}