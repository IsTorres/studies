# studies

repo to studies with curso.dev

```
install nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

install dependencies (with right node version)
    nvm install
```

Caso esteja usando o WSL, o comando docker compose up pode não funcionar diretamente, pois pode haver problemas de conexão com o Docker Daemon. Isso ocorre porque o WSL não utiliza o systemd como sistema de init, então o Docker Daemon pode não ser iniciado automaticamente.

Para usuários do Docker Desktop, verifique se a integração com o WSL está habilitada em Settings > Resources > WSL Integration. Se estiver, você deve conseguir usar docker compose up diretamente.

Caso o Docker Desktop não esteja em uso, inicie o daemon manualmente usando o comando:

``` sudo dockerd & ```

Esse comando iniciará o Docker diretamente, sem depender do systemctl, e permitirá o uso do docker compose up para levantar os containers.

depois disso o docker estará pronto para ser iniciado com o script:
``` npm run server:up ```