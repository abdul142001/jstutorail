function LexicalGlobal(){
var a = 10
    function lexicalOfGlobal(){
        console.log(a)
    }
    lexicalOfGlobal()
}
LexicalGlobal()