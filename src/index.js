const messages = [
  "Hoy es un buen día...",
  "El que vizualiza lo materializa...",
  "Una mente sana es una mente que no se deja llevar por la negatividad",
  "Todo lo que fue es y será, lo debemos de agradecer!",
  "El sacrificio es el proceso del resultado del éxito!",
  "No malgastes tu tiempo, invierte en tus conocimientos",
  "Levantarse temprano y doblar las cobijas son hábitos que te llevaran a un gran día",
  "Hablar de sentimientos, o de como te sientes, ayuda a que te sientas mejor más rápido",
  "Leer de 2 a 3 libros al mes te abre un panorama que nadie más conoce",
  "Una sonrisa fingida es mucho mejor que estar triste, el solo hecho de fingir la sonrisa, le hace creer a tu mente que todo esta bien",
  "El conocimiento es poder",
  "Todo lo que pidas se te dará",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};