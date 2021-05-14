const  PixelCount = () => {

    // convert image to convas
    var img = document.getElementById('my-image');
    var canvas = document.createElement('canvas');
    
    

    // Get convas information
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);


    // compare and count pixels 

    //rgba colors in image
    const rgbaGreen = { "0": 96, "1": 192, "2": 0, "3": 255 }
    const rgbaBlack = { "0": 0, "1": 0, "2": 0, "3": 255 }
    const rgbaBlackNoAlpha = { "0": 0, "1": 0, "2": 0, "3": 0 }
    const rgbaWhite = { "0": 255, "1": 255, "2": 255, "3": 255 }


    
    let colorCounterGreen = 0;
    let colorCounterBlack = 0;
    let colorCounterWhite = 0;

    

    for (i = 0; i <= img.width; i++) {
        for (j = 0; j <= img.height; j++) {


            var pixelData = canvas.getContext('2d').getImageData(j, i, 1, 1).data
            
            

            if (JSON.stringify(pixelData) == JSON.stringify(rgbaGreen)) {
                colorCounterGreen++

            }
            if (JSON.stringify(pixelData) == JSON.stringify(rgbaBlack) || JSON.stringify(pixelData) == JSON.stringify(rgbaBlackNoAlpha)) {
                colorCounterBlack++

            }
            if (JSON.stringify(pixelData) == JSON.stringify(rgbaWhite)) {
                colorCounterWhite++

            }

        }
    }

    const log = document.getElementById("log")

    log.innerHTML += `Pixels-Green : ${colorCounterGreen}<br>`
    log.innerHTML += `Pixels-Black : ${colorCounterBlack}<br>`
    log.innerHTML += `Pixels-White : ${colorCounterWhite}<br>`


}