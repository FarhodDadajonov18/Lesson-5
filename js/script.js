
alert("Iltimos har xil narsalarni yozib tashlamang");

var firstName = prompt("Ismingizni kiriting...").trim(),
    lastName = prompt ("Familyangizni kiriting").trim(),
    birthDate = prompt ("Tug'ilgan kuningizni kiriting").trim(),
    email = prompt (" Foydalanuvchining email pochtasi").trim(),
    address = prompt ( "Foydalanuvchining manzili").trim(),
    userNum = prompt("Foydalanuvchining nomeri").trim(),
    workPlace = prompt ("Foydalanuvchining ish joyi").trim(),
    profession = prompt ("Foydalanuvchining kasbi").trim(),
    hobby = prompt ("Foydalanuvchining sevimli mashg'uloti").trim(),
    car = prompt("Foydalanuvchining  moshinasi").trim();
    
    alert ("Ma'lumotlaringiz uchun rahmat");





var paragraph = document.createElement("h2");

    paragraph.innerHTML= ` Your name is : ${firstName} <br>
                           Your last name is : ${lastName} <br>
                           Your birthdate : ${birthDate} <br>
                           Your Email : ${email} <br>
                           Your address : ${address} <br>
                           Your Number : ${userNum} <br>
                           Your workplace : ${workPlace} <br>
                           Your profession : ${profession} <br>
                           Your hobby : ${hobby} <br>
                           Your avtomobile : ${car} <br>
                        `;

document.body.style.backgroundColor="black";
document.body.appendChild(paragraph).style.backgroundColor="brown";
document.body.appendChild(paragraph).style.color="white";