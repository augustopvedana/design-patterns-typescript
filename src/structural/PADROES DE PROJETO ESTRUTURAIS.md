PADRÕES DE PROJETO ESTRUTURAIS (STRUCTURAL)

    Os padrões estruturais(structural) se preocupam com a forma como
    os objetos são compostos para formar estruturas maiores.

    PADRÕES e INTENÇÕES

    Os padrões de projeto estruturais originais da GoF são:

-> ADAPTER  -  Converte a interface de uma classe em outra interface 
               esperada pelos clientes. O Adapter permite que certas 
               classes trabalhem em conjunto, pois de outra forma seria
               impossível por causa de suas interfaces incompatíveis.

-> BRIDGE  -   Separa uma abstração da sua implementação, de modo que
               as duas possam variar independentemente.

-> COMPOSITE - Compor objetos em estruturas de árvore para representarem
               hierarquias partes/todo. Composite permite aos clientes
               tratarem de uma maneira uniforme objetos individuais
               e composições de objetos.

-> DECORATOR - Atribui responsabilidades adicionais a um objeto 
               dinamicamente. Os Decorators fornecem uma alternativa
               flexível à subclasses para extensão da funcionalidade.

-> FAÇADE   -  Fornece uma interface única para um conjunto de interfaces
               em um subsistema. O Façade define uma interface de nível 
               mais alto que torna o subsistema mais fácil de usar.

-> FLYWEIGHT - Usa compartilhamento para suportar grandes quantidades
               de objetos de granularidade fina, de maneira eficiente.

-> PROXY   -   Fornece um objeto representatae (surrogate), ou um 
               marcador de outro objeto para controlar o acesso ao mesmo.