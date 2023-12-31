Intenção Oficial

    Especificar os tipos de objetos a serem criados
    usando uma instância-protótipo e criar novos objetos
    pela cópia desse protótipo.


Sobre JavaScript e TypeScript
    
    - JS/TS são linguagens baseadas em protótipos (TypeScript é JavaScript);
    - Objetos estão diretamente ligados a outros objetos;
    - Você pode literalmente fazer um objeto "herdar" algo de outro;
    - A "herança" é obtida via delegação(um objeto delega algo para seu protótipo);
    - Uma das maneiras mais simples para manipular o protótipo de um objeto é usando
        Object.create(prototypeObject);
    - Tambem temos o costume de usar classes ou funções construtoras para manipulação
      de protótipos (isso faz com que JS/TS pareçam estar usando o padrão orientado a
      objetos clássico);


Visão geral do padrão Prototype

    - O tipo de objeto a ser criado é determinado pelo objeto protótipo;
    - É típicamente usado para evitar a recriação de objetos "caros";
    - Ajuda a evitar a explosão de subclasses;
    - Pode (ou não) manter um registro de objetos protótipo em um objeto separado;
    - Geralmente é criado apenas com um método "clone" dentro do objeto protótipo;
    - O método clone pode gerar uma "shallow" ou "deep" copy do objeto protótipo;
    - Evita que o cliente conheça as classes que criam os objetos;


Aplicabilidade

    - Use o padrão prototype quando precisar que seu código não dependa de classes
      concretas para a criação de novos objetos;
    - Use o padrão prototype quando quiser evitar explosão de subclasses para objetos muito similares;
    - Use o padrão prototype para evitar a recriação de objetos "caros";


Consequências

    Bom
    - Oculta classes concretas do código cliente;
    - Ajuda na criação de objetos caros ou complexos;
    - Evita a explosão de subclasses;

    Ruim
    - Clonar objetos que tem referências para outros objetos pode
      ser complexo;
