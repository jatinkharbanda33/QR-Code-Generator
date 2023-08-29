

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
//import qr from "qr-image"
import inquirer from "inquirer"
import qr from "qr-image"
import x from "fs"
inquirer
  .prompt([
    {
    message:"Add a URL ",
    name:"URL"
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const help=answers.URL;
    var qr_svg = qr.image(help, { type: 'png' });
  qr_svg.pipe(x.createWriteStream('qr-image.png'));
    x.writeFile("urltext.txt" , help,(err)=>{
      if(err) throw err;
      console.log("QR code generated successfully")
    })
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
   
