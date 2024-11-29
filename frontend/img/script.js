const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dcbifc703',
    api_key: '785796665181941',  // Substitua pela sua API Key
    api_secret: '9_w5pAgBK-chhvJXGw_rQNySRDg', // Substitua pela sua API Secret
    secure: true
});

const url = cloudinary.url('maxfit_logo_branca_d02zfy', {
    secure: true, // Certifique-se que está gerando URLs HTTPS
  });
console.log(url)