const generateButton = document.querySelector('.generate-button');
let productInfo = {};
let generatedCode = '';
let isButtonClicked = false;

const codeGenerator = (info) => {
    let companyNameArray = info.companyName.split(' ');
    let companyInitials = '';
    let productNameArray = info.productName.split(' ');
    let productNameTrim = '';
    let code, randomNum;

    //Setting Company Initials
    for(let word of companyNameArray) {
        companyInitials += word[0].toUpperCase();
    }

    //Setting Trimmmed Product Name 
    for(let part of productNameArray) {
        if(productNameTrim.length <= 4) {
            if(productNameArray[0] === part) {
                if(part.length <= 2) {
                    productNameTrim += part;
                } else {
                    for(let i = 0; i < 2; i++) {
                        productNameTrim += part[i]
                    }
                }
            } else {
                productNameTrim += part[0];
            }
        }
    }

    randomNum = Math.floor(Math.random() * 10000);

    code = `${companyInitials}-00${productNameTrim}${randomNum}`;

    console.log(companyInitials);
    console.log(productNameTrim);
    console.log(code);

    return code;
}

const getProductInfo = () => {
    return {
        companyName: document.querySelector('#company-name').value,
        productName: document.querySelector('#product-name').value
    }
};

const displayFirst = () => {
    const paragraph = document.createElement('p');
    const displayOne = document.querySelector('.first-option');
    
    displayOne.appendChild(paragraph);
    paragraph.innerHTML = generatedCode;
}

const buttonClicked = () => {
    productInfo = getProductInfo();
    
    console.log('Button Clicked!');    
    console.log(`Company Name: ${productInfo.companyName}`);
    console.log(`Product Name: ${productInfo.productName}`);

    generatedCode = codeGenerator(productInfo);
    displayFirst();
};

generateButton.onclick = buttonClicked;