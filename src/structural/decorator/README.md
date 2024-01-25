Intenção Oficial
    -> Agregar responsabilidades adicionais a um objeto dinamicamente.
       Os Decorators fornecem uma alternativa flexível ao uso de subclasses para extensão de funcionalidades. Funciona como um decoro.

Sobre o Decorator
    -> Usa a composição ao invés da herança(sempre prefira composição ao
       invés de herança).
    -> É muito parecido com o "Composite" porém tem a intenção diferente.
    -> É usado para adicionar funcionalidades a objetos em tempo de execução.
    -> Finge ser o objeto sendo decorado, porém repassa chmadas de métodos
       para o mesmo.
    -> Pode manipular dados antes do retorno.

Estrutura
    -> Decorator é um "Component" e tem um "Component".
    -> Isso acontece porque ele precisa repassar chamadas de métodos
       para o componente concreto e servir de interface para Decorators
       concretos.
    -> Decoradores concretos podem adicionar funcionalidades ao seu componente.
       Eles podem se basear nas funcionalidade atuais do seu componente.
    
Aplicabilidade
    Use o padrão Decorator quando:
        -> Você precisa adicionar funcionalidades em objetos sem quebrar
           ou alterar o código existente.
        -> Você quer usar composição ao invés de herança.
        -> Você percebe que pode ocorrer uma explosão de subclasses em 
           determinada estrutura.
        
Consequências
    BOAS
        -> Composição é melhor do que herança em grande maioria dos casos.
        -> É fácil adicionar ou remover comportamento ed objetos sem tocar
           em código já escrito ou testado (OCP).
        -> É possível decorar um objeto já decorado, adicionando ainda mais
           funcionalidades(camadas).

    RUIM
        -> Quanto mais Decorators em camadas, mais complexo seu código se torna.