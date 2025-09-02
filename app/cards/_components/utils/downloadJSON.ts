  export function downloadJSON(obj, filename) {
    const dataUri = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    const link = document.createElement('a');
    link.href = dataUri;
    link.download = filename + '.ttpc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }