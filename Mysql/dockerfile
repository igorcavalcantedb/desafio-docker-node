# Derivando da imagem oficial do MySQL
FROM mysql:5.7
# Adicionando os scripts SQL para serem executados na criação do banco
ENV MYSQL_ROOT_PASSWORD=root

COPY ./db/ /docker-entrypoint-initdb.d/