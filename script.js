const storage = getStorage();
getDownloadURL(ref(storage, 'coin.png'))
    .then((url) =>{
        const image = document.getElementById('image');
        image.setAttribute('src', url);
    })
    .catch((error) => {
        const text = document.getElementById('text');
        switch (error.code) {
            case 'storage/object-not-found':
              text.innerHTML=error.code;
              break;
            case 'storage/unauthorized':
                text.innerHTML=error.code;
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
                text.innerHTML=error.code;
              // User canceled the upload
              break;
        
            // ...
        
            case 'storage/unknown':
                text.innerHTML=error.code;
              // Unknown error occurred, inspect the server response
              break;
        }
    });