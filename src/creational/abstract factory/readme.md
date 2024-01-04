Intenção oficial
    -> Fornecer uma interface para criação de famílias de objetos
       relacionados ou dependentes sem especificar suas classes 
       concretas.
    
Sobre o Abstract Factory
    - É um padrão de criação, portanto lida com a criação de objetos
    - É uma fábrica, assim como o Factory Method e geralmente é
      composto por múltiplos Factory Methods
    - Visa agrupar famílias de produtos compatíveis criando uma 
      fábrica concreta por grupo de objetos compatíveis
    - Separa o código que cria do código que usa os objetos(SRP)
    - Permite fácil implementação de novas famílias de objetos(OCP)
    - Toda a programação fica fodaca nas interfaces e não em 
      implementações