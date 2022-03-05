function toUpperCase(word,index){
  if(index +1){
   return word.substring(0,index).toUpperCase()+word.substring(index)
  }
  return word;
}
 function main(){
  const word = "www.mayuscula.com";
  console.log('Antes:',word);
  console.log('Despues:',toUpperCase(word,word.indexOf('.')));
 }
 main()