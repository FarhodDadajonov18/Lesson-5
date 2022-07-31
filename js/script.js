
var info = alert("Iltimos har xil narsalarni yozib tashlamang");
firstName = prompt("Ismingizni kiriting...").trim(),
lastName = prompt ("Familyangizni kiriting").trim(),
birthDate = prompt ("Tug'ilgan kuningizni kiriting").trim(),
email= prompt (" Foydalanuvchining email pochtasi").trim(),
address= prompt ( "Foydalanuvchining manzili").trim(),
userNum = prompt("Foydalanuvchining nomeri").trim(),
workPlace = prompt ("Foydalanuvchining ish joyi").trim(),
profession =prompt ("Foydalanuvchining kasbi").trim(),
hobby =prompt ("Foydalanuvchining sevimli mashg'uloti").trim(),
car = prompt("Foydalanuvchining  moshinasi").trim(),
text = alert ("Baribir yozib tashlaganiz uchun rahmat");





var paragraph = document.createElement("h2");

paragraph.textContent=`Your name is : ${firstName},
                       Your last name is : ${lastName},
                       Your birthdate : ${birthDate},
                       Your Email : ${email},
                       Your address : ${address},
                       Your Number : ${userNum},
                       Your workplace : ${workPlace},
                       Your profession : ${profession},
                       Your hobby : ${hobby},
                       Your avtomobile : ${car}
                       `;

document.body.style.backgroundColor="black";
document.body.appendChild(paragraph).style.backgroundColor="brown";
document.body.appendChild(paragraph).style.color="white";