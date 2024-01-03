const words = [ ['vector','trig'],
                ['lol','haha']];
words.push(['python','javascript'])
words[3] = ['java','c++']
words[3].push('lol')

console.log(words)

for(let i = 0; i < words.length; i++){
    let innerArrayLength = words[i].length;
    
    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(words[i][j]);
    }
}