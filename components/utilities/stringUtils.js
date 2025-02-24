export  const generateRandomString = (length) => {
    let id = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
    for (let i = 0; i < length; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  
    return id;
}