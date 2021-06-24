class HttpService {
  get(url) {
    return fetch(url)
      .then(r => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error('Erro ao carregar produtos...');
        }
      });
  }
}
