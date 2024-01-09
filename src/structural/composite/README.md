Padrões Estruturais
    -> Se preocupam com a forma como os objetos são compostos para
       formar estruturas maiores.

Intenção Oficial do COMPOSITE
    ->         Compor objetos em estruturas de árvore para representarem
               hierarquias partes/todo. Composite permite aos clientes
               tratarem de uma maneira uniforme objetos individuais
               e composições de objetos.

Sobre o Composite
    -> É um padrão da categoria estrutural(structural).
    -> Faz mais sentido em estruturas que podem ser tratadas hierarquicamente
       (como árvores).
    -> Pode ser uma solução para estruturas complexas que podem ser tratadas
       de maneira uniforme.
    -> Prioriza composição ao invés de herança.
    -> Exemplo: Produto solto com preço e caixa com vários do mesmo produto
       também com preço.

Aplicabilidade:
    Use o padrão Composite quando:
        -> Sua estrutura de objetos possa ser representada hierarquicamente,
           como por exemplo, estruturas do tipo árvore.
        -> Você quiser que o código cliente trate objetos compostos e objetos
           simples da mesma maneira.

Consequências
    BOAS
        - É muito fácil criar objetos complexos por composição
        - É fácil gerar uma hierarquia de objetos
        - É fácil usar polimorfismo e recursão
        - É fácil adicionar novos tipos de elementos na estrutura (OCP)
    RUIM
        - Dependendo da estrutura, pode quebrar o princípio da segregação de
          interface(ISP). Objetos do tipo "Leaf"(folha) tendem a ter métodos
          que não usam ou não fazem nada. 