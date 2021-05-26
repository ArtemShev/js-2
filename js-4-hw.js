const str = `Yesterday a man was walking in the park when he saw a gorilla. He's asked a policeman what he's should do.The policeman said: 'You should takethe gorilla to the zoo'.
The next day the policeman was in the park when he saw the man again.
He was still with the gorilla.
'I thought I told you to take the gorilla to the zoo',
he said.'I did', said the man.`;
const regexp = /\'\B|\B\'/gmi;
console.log(str.replace(regexp, `"`));