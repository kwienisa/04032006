const message = `Hi, I code this letter out from the physical one! Maafin aku ya Jacqelyn kalo aku gabisa ngertiin kamu tentang masalah kemarin, if you dont really care gapapa at least ga ngerusak harimu\n\nJujur, aku cuma pengen ketemu aja karna kangen dan ngasih kado tp emang km ga nyaman kalo awkward kayanya\n\nAku mau minta maaf ya, semoga kamu hidup bahagia terus dan selalu diberi berkah di umur 18th dan seterusnya\n\nAnyway, Thank you for keeping me around this whole time. It was a good time, and I'm happy.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      }
    }

    typeWriter();
  }, 3000);
}
