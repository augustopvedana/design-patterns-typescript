Inteção Oficial
    -> O Bridge é um padrão de projeto estrutural que tem a intenção
       de desacoplar uma abstração da sua implementação, de modo que
       as duas possam variar e evoluir independentemente.

Abstração e Implementação
    Abstração:
        -> É um código de alto nível que geralmente delega ações para outro objeto.
    Implementação:
        -> É o código que realmente faz o trabalho.

Diferenças entre Bridge e Adapter
    -> A diferença chave entre esses padrões está nas suas intenções...
       O padrão Adapter faz as coisas funcionarem APÓS elas terem sido
       projetadas; o Bridge as faz funcionar ANTES QUE existam...

Aplicabilidade
    Use o padrão Bridge quando:
        -> Você souber que sua estrutura terá abstrações (código de alto
           nível) e implementações dessa abstração(detalhes) que possam
           variar de maneira independente.
        -> Você souber que o Adapter poderia ser aplicado naquela estrutura
           (você já conhece a estrutura)
        -> Você quiser dividir uma classe que possa ter diversas variantes
           (como em produtos e suas variações de cores: CanetaAzul, CanetaVermelha, CamisetaAzul, CamisetaVermelha, etc...).
        -> Você quer trocar as implementações em tempo de execução.

    Consequências
        BOAS
            -> Desacopla o código da abstração do código da implementação
               (SRP).
            -> Implementa o OCP ao permitir novas abstrações e/ou implementações
               para o código existente.
            -> Tem as mesmas vantagens do Adapter.
        RUIM
            -> Aumenta a complexidade da aplicação quando implementado em
               locais incorretos.