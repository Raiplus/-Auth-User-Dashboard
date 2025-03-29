//Token Generation
function get_number() {
    return Math.floor(Math.random() * 10) // Generate a random number between 0 and 9
  }
  
  function getRandomLetter() {
    let randomVar1 = Math.random() < 0.5 ? 65 : 97;
    let randomVar2 = Math.floor(randomVar1 + Math.random() * 26)
    return String.fromCharCode(randomVar2)
  }
  function GetToken() {
    let Token = ""
    for (let i = 0; i < 6; i++) {
      let v1 = getRandomLetter()
      let v2 = get_number()
      Token = v1 + v2 + Token
    }
    return Token
  }
 
  export { GetToken }
   // token end