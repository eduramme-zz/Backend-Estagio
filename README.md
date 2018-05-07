# Dependencias do projeto:

Mongodb - Database;  
Handlebars;  
Node.js 


# Descri��o Geral de Como funciona

Voc� digita o link que quer encurtar, o programa ent�o cria um outro 
link que redireciona para o endere�o original quando acessado.


# ARQUITETURA

//Challenge/controller/controller.js
A l�gica do programa, la est�o todas as fun��es que ser�o testadas 
nos endpoints;

//public/js/hashCode.js
Fun��o hash utilizada para produzir os links encurtados;

//models/users
Especifica��o das collections utilizadas na database;

//routes/index.js
P�gina que redireciona para a l�gica do programa quando o url �
acessado;


# COMO EXECUTAR O BUILD E OS TESTES

-execute o arquivo install.sh

-execute o arquivo run.sh

-digite 'node app' no terminal e aguarde o mensagem de que deu tudo 
certo


# CONSIDERA��ES

Tentei fazer o arquivo install.sh e start.sh para Ubunto, mas por 
algum motivo desconhecido n�o funcionou localmente. Talvez funcione
numa m�quina n�o local.

Tem alguns outros endpoints pois tentei integrar o back com o front
por pura curiosidade e pr�tica. O contador de hits parece n�o estar
funcionando apropriadamente (linhas 181 - 193 no controller.js), 
se pudessem me dar umas dicas/feedback nessas partes do c�digo 
tamb�m ficarei grato (:


# AGRADECIMENTOS

Finalmente, gostaria de agradecer a toda equipe pela oportunidade
e pr�tica. Esse desafio me rendeu boas li��es n�o apenas de c�digo
como tamb�m de vida. Aprendi a importancia de organizar melhor o
tempo e se programar para evitar atrasos, de fazer commits regulares
(esse projeto n�o tem nenhum at� agora), muita coisa javaScript 
e praticamente tudo que sei nesse momento de nodeJS. Com certeza
isso vai me ajudar muito no futuro. 

Quaisquer d�vidas estou disponivel. 