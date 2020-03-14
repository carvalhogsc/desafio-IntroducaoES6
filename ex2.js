const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   const idades = usuarios.map(({idade}) => idade);
   console.log(idades);

   const filtrarUsuarios = usuarios.filter(({idade, empresa}) => idade > 18 && empresa === "Rocketseat");
   console.log(filtrarUsuarios);

   const procurarUsuarioEmpresa = usuarios.find(({empresa}) => empresa === "Google");
   console.log(procurarUsuarioEmpresa);

   const mapaFiltro = usuarios.filter(item => item.idade*2 < 50);
    console.log(mapaFiltro);