const os = require('os');

console.log("Nama User:", os.userInfo().username);
console.log("Platform:", os.platform());
console.log("Total Memori:", os.totalmem());

let alamat = new URL('https://www.example.com/search?keyword=nodejs');

console.log("Kata kunci pencarian:", alamat.searchParams.get('keyword'));