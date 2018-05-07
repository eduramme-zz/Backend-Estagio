# Dependencias do projeto:

Mongodb - Database;  
Handlebars;  
Node.js 


# Descrição Geral de Como funciona

Você digita o link que quer encurtar, o programa então cria um outro 
link que redireciona para o endereço original quando acessado.


# ARQUITETURA

//Challenge/controller/controller.js
A lógica do programa, la estão todas as funções que serão testadas 
nos endpoints;

//public/js/hashCode.js
Função hash utilizada para produzir os links encurtados;

//models/users
Especificação das collections utilizadas na database;

//routes/index.js
Página que redireciona para a lógica do programa quando o url é
acessado;


# COMO EXECUTAR O BUILD E OS TESTES

-execute o arquivo install.sh

-execute o arquivo run.sh

-digite 'node app' no terminal e aguarde o mensagem de que deu tudo 
certo


# CONSIDERAÇÕES

Tentei fazer o arquivo install.sh e start.sh para Ubunto, mas por 
algum motivo desconhecido não funcionou localmente. Talvez funcione
numa máquina não local.

Tem alguns outros endpoints pois tentei integrar o back com o front
por pura curiosidade e prática. O contador de hits parece não estar
funcionando apropriadamente (linhas 181 - 193 no controller.js), 
se pudessem me dar umas dicas/feedback nessas partes do código 
também ficarei grato (:


# AGRADECIMENTOS

Finalmente, gostaria de agradecer a toda equipe pela oportunidade
e prática. Esse desafio me rendeu boas lições não apenas de código
como também de vida. Aprendi a importancia de organizar melhor o
tempo e se programar para evitar atrasos, de fazer commits regulares
(esse projeto não tem nenhum até agora), muita coisa javaScript 
e praticamente tudo que sei nesse momento de nodeJS. Com certeza
isso vai me ajudar muito no futuro. 

Quaisquer dúvidas estou disponivel. 