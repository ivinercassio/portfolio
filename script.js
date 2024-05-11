function moreInformation() {
    document.querySelector("button").disabled = true;
    
    let section = document.querySelector("section");
    section.insertAdjacentHTML('afterbegin', '<h3 class="mt-4">Contato</h3>'); 
    section.insertAdjacentElement('beforeend', document.createElement("div"));

    let divContact = section.lastElementChild;
    divContact.insertAdjacentHTML("afterbegin", "<a href='mailto:ivinercassio@gmail.com' target='_blank'> <img id='gmail' src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white' alt='Link para o meu gmail'/>   </a>");
    divContact.insertAdjacentHTML("beforeend", "<a href='https://www.linkedin.com/in/iviner-cássio-106b6526b/' target='_blank'> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='Link para o meu linkedin'/> </a>");
    divContact.insertAdjacentHTML("beforeend", "<a href='https://t.me/Iviner' target='_blank'> <img  src='https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white' alt='Link para meu telegram'/>  </a>");
    divContact.insertAdjacentHTML("beforeend", "<a href='https://github.com/ivinercassio' target='_blank'> <img id='git' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt='Link para o meu GitHub'/>  </a> ");
    divContact.insertAdjacentHTML("afterend", '<h3 class="mt-4">Formação</h3>');
    section.lastElementChild.insertAdjacentElement("afterend", document.createElement("div"));

    let divEducation = section.lastElementChild;
    divEducation.insertAdjacentHTML("afterbegin", "<p>O primeiro ano do curso aborda com mais enfase a lógica de programação e o desenvolvimento web. <br><i class='bi bi-hash'></i>Tecnologias trabalhadas: JavaScript, HTML, CSS, BootStrap, etc<p/>");
    divEducation.insertAdjacentHTML("beforeend", "<p>No ano seguinte, ocorre a introdução aos bancos de dados e gestão e planemento de softwares. <br><i class='bi bi-hash'></i>Tecnologias trabalhadas: Java, SQL, MySQL, Php, Programação Orientada à Objetos (POO), etc</p>");
    divEducation.insertAdjacentHTML("beforeend", "<p>No terceiro ano, estuda-se sobre frameworks, API's, introdução ao desenvolvimento mobile e redes de computadores. <br><i class='bi bi-hash'></i>Tecnologias trabalhadas: SpringBoot, AngularJS, Ionic, TypeScript, Laravel, etc</p>");
    divEducation.insertAdjacentElement("afterend", document.createElement("div"));

}